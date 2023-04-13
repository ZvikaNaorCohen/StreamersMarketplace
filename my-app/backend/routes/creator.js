var express = require("express");
const mongoAsyncHandler = require("../mongodbClient");
var router = express.Router();


router.post("/register", async (req, res, next) => {
    try {
        let creatorEmail = req.body.email;
        let creatorDisplayName = req.body.displayName;
        const response = await mongoAsyncHandler.loadAllObjectsAsync("creators");
        for (let i = 0; i < response.length; i++) {
            if (creatorEmail == response[i].body.email || creatorDisplayName == response[i].body.displayName) {
                res.status(500).send({ "error": "email or display name exist" });
                return;
            }
        }
        const body = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            displayName: req.body.displayName,
            phoneNumber: req.body.phoneNumber,
            walletNumber: req.body.walletNumber,
            profilePic: req.body.profilePic,
            backgroundPic: req.body.backgroundPic,
            description: req.body.description,
            introVideo: req.body.introVideo
        }
        await mongoAsyncHandler.addObjectAsync("creators", body);
        res.status(201).send("New creator added successfuly");
    } catch (error) {
        next(error);
    }
});

router.get("/:creatorId", async (req, res, next) => {
    try {
        const creatorId = req.params.creatorId;
        console.log(creatorId);
        let creator = await mongoAsyncHandler.findObjectByIdAsync("creators", creatorId); // throws if not found
        let creatorDataToReturn = {
            email: creator.body.email,
            firstName: creator.body.firstName,
            lastName: creator.body.lastName,
            displayName: creator.body.displayName,
            phoneNumber: creator.body.phoneNumber,
            walletNumber: creator.body.walletNumber,
            backgroundPic: creator.body.backgroundPic,
            profilePic: creator.body.profilePic,
            description: creator.body.description,
            introVideo: creator.body.introVideo
        }
        res.status(200).send(creatorDataToReturn);
    } catch (error) {
        next(error)
    }
});

router.get("/:creatorId/items", async (req, res, next) => {
    try {
        const creatorId = req.params.creatorId;
        let creatorItems = await mongoAsyncHandler.loadAllObjectsByCreatorIdAsync("items", creatorId);
        let parsedCreatorItem = [];
        creatorItems.forEach(creatorItem => {
            parsedCreatorItem.push({
                title: creatorItem.body.title,
                description: creatorItem.body.description,
                image: creatorItem.body.image,
                price: creatorItem.body.price,
                creator: creatorItem.body.creator
            })
        });
        res.status(200).send(parsedCreatorItem);
    } catch (error) {
        next(error)
    }
});



//internal use only
router.delete("/delete/:creatorId", async (req, res, next) => {
    const itemId = req.params.creatorId;
    try {
        await mongoAsyncHandler.deleteFileAsync("creators", itemId);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
});


router.patch("/update/:creatorId", async (req, res, next) => {
    const creatorId = req.params.creatorId;
    try {
        const response = await mongoAsyncHandler.findObjectByIdAsync("creators", creatorId);
        let updatedCreator = {}
        if (response != null) {
            //creator already exist -> need to update:
            updatedCreator = {
                ...req.body
            };

        }
        else {
            res.status(500).send("creator does not exist");
        }
        await mongoAsyncHandler.updateObjectAsync("creators", creatorId, updatedCreator);
        res.status(200).send();
    }
    catch (error) {
        next(error);
    }
});


module.exports = router;
