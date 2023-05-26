var express = require("express");
const mongoAsyncHandler = require("../mongodbClient");
var router = express.Router();

router.get("/:creatorId", async (req, res, next) => {
  try {
    const creatorId = req.params.creatorId;
    let videos = await mongoAsyncHandler.loadAllObjectsByCreatorIdAsync("videos", creatorId);

    if (videos && videos.length > 0) {
      let creator = videos[0];
      let creatorDataToReturn = {
        creatorData: {
          creatorId: creator.body.creator,
        },
        videosArr: creator.body.videosArr,
      };
      res.status(200).send(creatorDataToReturn);
    } else {
      res.status(404).send("Creator not found.");
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:creatorId/videos", async (req, res, next) => {
  try {
    const creatorId = req.params.creatorId;
    let videos = await mongoAsyncHandler.loadAllObjectsByCreatorIdAsync(
      "videos", creatorId);

    if (videos && videos.length > 0) {
      let creator = videos[0];
      let videosArr = creator.body.videosArr;
      res.status(200).send({ videosArr });
    } else {
      res.status(404).send("Creator not found.");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
