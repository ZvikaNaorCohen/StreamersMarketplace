var express = require("express");
const mongoAsyncHandler = require("../mongodbClient");
var router = express.Router();

router.get("/:creatorId", async (req, res, next) => {
    try {
        const creatorId = req.params.creatorId;
        console.log(creatorId);
        let creators = await mongoAsyncHandler.loadAllObjectsByCreatorIdAsync("stream", creatorId); // returns an array of items
        
        if (creators && creators.length > 0) {
            let creator = creators[0]; // Get the first item in the array
            let creatorDataToReturn = {
                creatorId: creator.body.creator,
                videoLink: creator.body.videoLink
            }
            res.status(200).send(creatorDataToReturn);
        } else {
            // Handle the case where the creator is not found
            // Return an appropriate response or throw an error
            // Example: throw new Error("Creator not found.");
        }
    } catch (error) {
        next(error)
    }
});



module.exports = router;