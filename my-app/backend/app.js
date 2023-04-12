let express = require("express");
const mongoAsyncHandler = require("./mongodbClient");


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

    const user = require("./routes/user");
    const creator = require("./routes/creator");
    const item = require("./routes/item");
    const purchase = require("./routes/purchase");

    //#endregion

    // Routings
    app.use("/creator", creator);
    app.use("/item", item);
    app.use("/purchase", purchase);
    app.use("/user", user);

    app.use(express.static('public'));

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(err.status || 500).send(err.message);
    });


    await mongoAsyncHandler.initMongoConnection();

    app.listen('5000', () => {
        console.log("Server listen on port 5000");
    });
}

main();

module.exports = app;