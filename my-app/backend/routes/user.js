var express = require("express");
const mongoAsyncHandler = require("../mongodbClient");
var router = express.Router();


router.post("/register", async (req, res, next) => {
    try {
        let userEmail = req.body.email;
        let userDisplayName = req.body.displayName;
        const response = await mongoAsyncHandler.loadAllObjectsAsync("users");
        for (let i = 0; i < response.length; i++) {
            if (userEmail == response[i].body.email || userDisplayName == response[i].body.displayName) {
                res.status(500).send({ "error": "email or display name" });
                return;
            }
        }
        const body = {
            email: req.body.email,
            googleId: req.body.googleId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            displayName: req.body.displayName,
            phoneNumber: req.body.phoneNumber,
            walletNumber: req.body.walletNumber,
            profilePic: req.body.profilePic,
            description: req.body.description
        }
        await mongoAsyncHandler.addObjectAsync("users", body);
        res.status(201).send("New user added successfuly");
    } catch (error) {
        next(error);
    }
});

router.get("/:userId", async (req, res, next) => {
    try {
        const userId = req.params.userId;
        let user = await mongoAsyncHandler.findObjectByGoogleIdAsync("users", userId); // throws if not found
        let userDataToReturn = {
            email: user.body.email,
            googleId: user.body.googleId,
            firstName: user.body.firstName,
            lastName: user.body.lastName,
            displayName: user.body.displayName,
            phoneNumber: user.body.phoneNumber,
            walletNumber: user.body.walletNumber,
            profilePic: user.body.profilePic,
            description: user.body.description
        }
        res.status(200).send(userDataToReturn);
    } catch (error) {
        next(error)
    }
});


//internal use only
router.delete("/delete/:userId", async (req, res, next) => {
    const itemId = req.params.userId;
    try {
        await mongoAsyncHandler.deleteDocumentByGoogleIdAsync("users", itemId);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
});


router.patch("/update/:userId", async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const response = await mongoAsyncHandler.findObjectByGoogleIdAsync("users", userId);
        let updatedUser = {}
        if (response != null) {
            //user already exist -> need to update:
            updatedUser = {
                ...response.body,
                ...req.body
            };

        }
        else {
            res.status(500).send("User does not exist");
        }
        await mongoAsyncHandler.updateUserByGoogleIdAsync("users", userId, updatedUser);
        res.status(200).send();
    }
    catch (error) {
        next(error);
    }
});


module.exports = router;
