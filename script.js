const application = {
    elizabethInfo: {
        name: "Elizabeth Sanger",
        partyAffiliation: "",
        district: "",
        biography: "",
        missionStatement: "",
        eventCalendar: [],
        platformStatement: {
            taxes: "fdaijfafi",
            jobs: "",
            infrastructure: "",
            healthCare: "",
            crimeEnforcement: "",
        },
        images: {
            gallery: [],
            headshot: "",
            familyPicture: "",
            constitPicture: [],
        }
    },
    volunteerInfo: {
        name: "",
        address: "",
        email: "",
        phone: "",
        availability: "",
        activities: [],
    },
    websites: {
        donationForm: "",
        voteRegistration: "",
    },
    addtoImageGallery: function (newImage) {
        this.elizabethInfo.images.gallery.push(newImage)
    },
    changeBiography: function (newBiography) {
        this.elizabethInfo.biography = newBiography;
    },
    changePlatform: function (platform2, newPlatformStatement) {
        this.elizabethInfo.platformStatement[platform2]  = newPlatformStatement;
    },
}

application.changeBiography("Lalalalala")
console.log(application.elizabethInfo.biography)
application.changePlatform(application.elizabethInfo.platformStatementtaxes, "taxes suck");
console.log(application.elizabethInfo.platformStatement)
