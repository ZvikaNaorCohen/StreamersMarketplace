const mongo = require("mongodb");
const username = encodeURIComponent("eliranzeitouni");
const password = encodeURIComponent("7whHTXefWlWGkXeF");
const uri = `mongodb+srv://${username}:${password}@afcluster.atpou3v.mongodb.net/?retryWrites=true&w=majority`;
let client;

async function initMongoConnection()
{
  try {
    console.log("connecting to DB");
    client = await mongo.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connection succeeded");
  } catch (error) {
    console.log("Failed in initMongoConnection ");
    console.log(error);
  }
}

async function loadAllObjectsAsync(collectionName) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = await db.collection(collectionName);
      const items = await collection.find().toArray();
      console.log("finished loading all files ", items.length);
      return items;
  } catch (error) {
      console.log("failed in listObjectsAsync ");
      console.log(error);
      throw error;
  }
}

async function loadAllObjectsByCreatorIdAsync(collectionName, creatorId) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = await db.collection(collectionName);
      const items = await collection.find({'body.creator': creatorId}).toArray();
      console.log("finished loading all files ", items.length);
      return items;
  } catch (error) {
      console.log("failed in loadAllObjectsByIdAsync ");
      console.log(error);
      throw error;
  }
}

async function loadStreamByCreatorIdAsync(collectionName, creatorId) {
  try {
    const db = client.db("StreamersMarketplace");
    const collection = await db.collection(collectionName);
    const items = await collection.find({ "body.creatorId": creatorId }).toArray();

    console.log("finished loading the files");

    return items; // Return an array of items instead of a single item
  } catch (error) {
    console.log("failed in loadStreamByCreatorIdAsync");
    console.log(error);
    throw error;
  }
}



async function findObjectByIdAsync(collectionName, id) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = db.collection(collectionName);
      let objectId = new mongo.ObjectId(id);

      return await collection.findOne({ "_id": objectId });
  } catch (error) {
      console.log("failed in findObjectByIdAsync ");
      console.log(error);
      throw error;
  }
}

async function findObjectByGoogleIdAsync(collectionName, id) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = db.collection(collectionName);
      result = await collection.findOne({ "body.googleId": id }); 
      return result
  } catch (error) {
      console.log("failed in findObjectByGoogleIdAsync ");
      console.log(error);
      throw error;
  }
}


async function addOrUpdateObjectAsync(collectionName, id, body) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = db.collection(collectionName);
      const now = new Date();
      let objectId = new mongo.ObjectId(id);
      console.log("object found, updating mongo - ", id);
      await collection.updateOne({ "_id": objectId }, { $set: { "body": body, "date": now } }, { "upsert": true });
  } catch (error) {
      console.log("failed in addOrUpdateObjectAsync ");
      console.log(error);
      throw error;
  }
}

async function updateObjectAsync(collectionName, id, nextConfiguration) {
  try {
      const now = new Date();
      const collection = client.db("StreamersMarketplace").collection(collectionName);
      let objectId = new mongo.ObjectId(id);
      return await collection.updateOne({ "_id": objectId }, { $set: { body: nextConfiguration, date: now }});
  } catch (error) {
      console.log("failed in updateObjectAsync ");
      console.log(error);
      throw error;
  }
}

async function updateUserByGoogleIdAsync(collectionName, id, body) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = db.collection(collectionName);
      const now = new Date();
      console.log("object found, updating mongo - ", id);
      await collection.updateOne({ "body.googleId": id }, { $set: { "body": body, "date": now } }, { "upsert": true });
  } catch (error) {
      console.log(error);
      throw error;
  }
}

async function addObjectAsync(collectionName, body) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = db.collection(collectionName);
      const now = new Date();
      return await collection.insertOne({"body": body, "date": now });
  } catch (error) {
      console.log("failed in addObjectAsync ");
      console.log(error);
      throw error;
  }
}

async function addObjectAsyncWithGoogleId(collectionName, body) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = db.collection(collectionName);
      const now = new Date();
      return await collection.insertOne({ "body": body, "date": now });
  } catch (error) {
      console.log(error);
      throw error;
  }
}


async function cleanCollection(collectionName) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = db.collection(collectionName);
      await collection.deleteMany({});
  } catch (error) {
      console.log("failed in cleanCollection ");
      console.log(error);
      throw error;
  }
}

async function deleteFileAsync(collectionName, itemId) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = db.collection(collectionName);
      let objectId = new mongo.ObjectID(itemId);

      await collection.deleteOne({ "_id": objectId });
  } catch (error) {
      console.log("failed in deleteFileAsync ");
      console.log(error);
      throw error;
  }
}

async function deleteDocumentByGoogleIdAsync(collectionName, id) {
  try {
      const db = client.db("StreamersMarketplace");
      const collection = db.collection(collectionName);

      await collection.deleteMany({ "body.googleId": id });
  } catch (error) {
      console.log("failed in delete_async");
      console.log(error);
      throw error;
  }
}

const tables = {
  users : {
    email: null,
    firstName: null,
    lastName: null,
    displayName: null,
    phoneNumber: null,
    walletNumber: null,
    profilePic: null,
    description: null,
    googleId: null
  },
  purchases: {
    creatorId: null,
    creatorName: null,
    buyerId: null,
    buyerEmail: null,
    buyerName: null,
    itemName: null,
    itemId: null,
    price: null,
    totalPrice: null
  },
  items: {
    id: null,
    title: null,
    description: null,
    image: null,
    price: null,
    creator: null
  },
  creators: {
    email: null,
    firstName: null,
    lastName: null,
    displayName: null,
    phoneNumber: null,
    walletNumber: null,
    profilePic: null,
    backgroundPic: null,
    description: null,
    introVideo: null
  },
  stream: {
    creatorId: null,
    videoLink: null
  }
}

module.exports = {
  tables, initMongoConnection, 
  loadAllObjectsAsync, loadAllObjectsByCreatorIdAsync,
  findObjectByIdAsync, findObjectByGoogleIdAsync,
  addOrUpdateObjectAsync, updateObjectAsync, 
  updateUserByGoogleIdAsync, addObjectAsync,
  addObjectAsyncWithGoogleId, cleanCollection,
  deleteFileAsync, deleteDocumentByGoogleIdAsync, loadStreamByCreatorIdAsync
}
