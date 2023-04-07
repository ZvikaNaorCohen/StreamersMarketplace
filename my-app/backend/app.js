let express = require("express");
let cors = require("cors");
const mongo_async_handler = require("./mongodbClient");


let app = express();

async function main() {
    //#region global imports
    require("dotenv").config();
    //#endregion
    //#region express configures

    // app.use(express.static(process.env.PWD + 'public'));

    app.use(express.json()); // parse application/json

    app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

    // middleware to serve all the needed static files under the dist directory - loaded from the index.html file
    // https://expressjs.com/en/starter/static-files.html
    app.use(express.static("dist"));

    app.get("/keepalive", (req, res) => {
        res.status(200).send("alive!");
    });

    const corsConfig = {
        origin: true,
        credentials: true,
    };

    app.use(cors(corsConfig));
    app.options("*", cors(corsConfig));


    // const items = require("./ROUTES/items");
    // const user = require("./ROUTES/user");
    // const serviceGroup = require("./ROUTES/serviceGroup");
    // const history = require("./ROUTES/history");
    // const purchase = require("./ROUTES/purchase");
    // const rating = require("./ROUTES/rating");


    //#endregion

    // Routings
    // app.use("/items", items);
    // app.use("/user", user);
    // app.use("/history", history);
    // app.use("/serviceGroup", serviceGroup);
    // app.use("/purchase", purchase);
    // app.use("/rating", rating);

    app.use(express.static('public'));

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(err.status || 500).send(err.message);
    });


    await mongo_async_handler.init_mongo_connection();
}

main();

module.exports = app;