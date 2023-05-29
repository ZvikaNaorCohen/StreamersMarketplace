let express = require("express");
const mongoAsyncHandler = require("../mongodbClient");
let router = express.Router();


router.get("/:itemId", async (req, res, next) => {
    const itemId = req.params.itemId;
    try {
        const item = await mongoAsyncHandler.findObjectByIdAsync("videos", itemId);

        let itemToReturn = {
            id: item._id,
            creator: item.body.creator,
            title: item.body.title,
            videoLink: item.body.videoLink
        };
        res.status(200).send(itemToReturn);
    } catch (error) {
        next(error);
    }
});

module.exports = router;