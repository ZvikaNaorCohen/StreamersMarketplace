var express = require("express");
const mongoAsyncHandler = require("../mongodbClient");
var router = express.Router();


// purchase
router.post("/submit", async (req, res, next) => {
    let itemId = req.body.itemId;
    let buyerId = req.body.buyerId;
    let buyerEmail = req.body.buyerEmail;
    let item = await mongoAsyncHandler.findObjectByIdAsync("items", itemId);
    let creator = await mongoAsyncHandler.findObjectByIdAsync("creators", item.body.creator);
    let buyer = await mongoAsyncHandler.findObjectByGoogleIdAsync("users", req.body.googleId);
    let price = item.body.price

    const body = {
        creatorId: item.body.creator,
        creatorName: creator.body.displayName,
        buyerId: buyerId,
        buyerEmail: buyerEmail,
        buyerName: buyer.body.displayName,
        itemName: item.body.title,
        itemId: itemId,
        price: price,
        googleId: req.body.googleId
    }

    try {
        await mongoAsyncHandler.addObjectAsync("purchases", body)
        res.status(201).send(body);
    } catch (error) {
        next(error)
    }
});



module.exports = router;
