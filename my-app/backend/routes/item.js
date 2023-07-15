let express = require("express");
const mongoAsyncHandler = require("../mongodbClient");
let router = express.Router();


router.get("/:itemId", async (req, res, next) => {
    const itemId = req.params.itemId;
    try {
        const item = await mongoAsyncHandler.findObjectByIdAsync("items", itemId);

        let itemToReturn = {
            id: item._id,
            title: item.body.title,
            description: item.body.description,
            image: item.body.image,
            price: item.body.price,
            creator: item.body.creator,
            ownedBy: item.body.ownedBy
        };
        res.status(200).send(itemToReturn);
    } catch (error) {
        next(error);
    }
});


router.post("/add", async (req, res, next) => {
    try {
        const body = {
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            creator: req.body.creator,
            ownedBy: req.body.ownedBy
        }
        let items = await mongoAsyncHandler.loadAllObjectsAsync("items");
        items.forEach(item => {
            if (req.body.title == item.body.title && req.body.creator == item.body.creator) {
                const error = new Error("The item already exists for this creator");
                error.code = 500;
                throw error;
            }
        });

        let item = await mongoAsyncHandler.addObjectAsync("items", body);
        console.log("item added sucessfully", item);
        res.status(200).send({ "itemId": item.insertedId });

    } catch (error) {
        next(error);
    }
});


router.patch("/update/:itemId", async (req, res, next) => {
    const itemId = req.params.itemId;
    try {
        const response = await mongoAsyncHandler.findObjectByIdAsync("items", itemId);
        let updatedItem = {
            id: response._id,
            title: req.body.title || response.body.title,
            description: req.body.description || response.description,
            image: req.body.image || response.body.image,
            price: req.body.price || response.body.price,
            creator: req.body.creator || response.body.creator,
            ownedBy: req.body.ownedBy || response.body.ownedBy
        }
        const exists = await isItemAlreadyExistForCreator(updatedItem.title, updatedItem.creator);
        if (exists) {
            //check if any other field  not updated:
            if (req.body.description == response.body.description &&
                req.body.image == response.body.image &&
                req.body.price == response.body.price &&
                req.body.ownedBy == response.body.ownedBy) {
                const error = new Error("The item already exists for this creator");
                error.code = 500;
                throw error;
            }
            else { //some of the fields updated
                await mongoAsyncHandler.addOrUpdateObjectAsync("items", updatedItem.id, updatedItem)
                res.status(201).send(updatedItem);
            }

        }
        else {
            //updated item doesnt exist. can update:
            await mongoAsyncHandler.addOrUpdateObjectAsync("items", updatedItem.id, updatedItem)
            res.status(201).send(updatedItem);
        }
    } catch (error) {
        next(error);
    }
});


router.delete("/delete/:itemId", async (req, res, next) => {
    const itemId = req.params.itemId;
    try {
        await mongoAsyncHandler.deleteFileAsync("items", itemId);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
});


async function isItemAlreadyExistForCreator(title, creator) {
    let items = await mongoAsyncHandler.loadAllObjectsAsync("items");
    items.forEach(item => {
        if (title == item.body.title && creator == item.body.creator) {
            return true;
        }
    });
    return false;
}

module.exports = router;
