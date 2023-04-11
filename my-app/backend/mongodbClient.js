const { MongoClient } = require('mongodb');
const username = encodeURIComponent("eliranzeitouni");
const password = encodeURIComponent("7whHTXefWlWGkXeF");
const uri = `mongodb+srv://${username}:${password}@afcluster.atpou3v.mongodb.net/?retryWrites=true&w=majority`;
let client;

export async function initMongoConnection()
{
  try {
    console.log("connecting to DB");
    client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connection succeeded");
  } catch (error) {
    console.log("Failed in initMongoConnection ");
    console.log(error);
  }
}

export async function listObjectsAsync(collectionName) {
  try {
      const db = client.db();
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

export async function findObjectByIdAsync(collectionName, id) {
  try {
      const db = client.db();
      const collection = db.collection(collectionName);
      let objectId = new mongo.ObjectID(id);
      return await collection.findOne({ "_id": objectId });
  } catch (error) {
      console.log("failed in findObjectByIdAsync ");
      console.log(error);
      throw error;
  }
}

export async function addOrUpdateObjectAsync(collectionName, id, body) {
  try {
      const db = client.db();
      const collection = db.collection(collectionName);
      const now = new Date();
      let objectId = new mongo.ObjectID(id);
      console.log("object found, updating mongo - ", id);
      await collection.updateOne({ "_id": objectId }, { $set: { "body": body, "date": now } }, { "upsert": true });
  } catch (error) {
      console.log("failed in addOrUpdateObjectAsync ");
      console.log(error);
      throw error;
  }
}

export async function updateObjectAsync(collectionName, id, nextConfiguration) {
  try {
      const now = new Date();
      nextConfiguration.date = now;
      const collection = client.db().collection(collectionName);
      let objectId = new mongo.ObjectID(id);
      return await collection.updateOne({ "_id": objectId }, { $set: nextConfiguration });
  } catch (error) {
      console.log("failed in updateObjectAsync ");
      console.log(error);
      throw error;
  }
}

export async function addObjectAsync(collectionName, body) {
  try {
      const db = client.db();
      const collection = db.collection(collectionName);
      const now = new Date();
      return await collection.insertOne({"body": body, "date": now });
  } catch (error) {
      console.log("failed in addObjectAsync ");
      console.log(error);
      throw error;
  }
}

export async function cleanCollection(collectionName) {
  try {
      const db = client.db();
      const collection = db.collection(collectionName);
      await collection.deleteMany({});
  } catch (error) {
      console.log("failed in cleanCollection ");
      console.log(error);
      throw error;
  }
}

export async function deleteFileAsync(collectionName, itemId) {
  try {
      const db = client.db();
      const collection = db.collection(collectionName);
      let objectId = new mongo.ObjectID(itemId);

      await collection.deleteOne({ "_id": objectId });
  } catch (error) {
      console.log("failed in deleteFileAsync ");
      console.log(error);
      throw error;
  }
}

const tables = {
  user : {
    email: userEmail,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    displayName: userDisplayName,
    phoneNumber: req.body.phoneNumber,
    walletNumber: req.body.walletNumber,
    profilePic: req.body.profilePic,
    description: req.body.description
  },
  purchase : {
    creatorId: creator.body.googleId,
    creatorName: creator.body.displayName,
    buyerId: buyerId,
    buyerEmail: buyerEmail,
    buyerName: buyer.body.displayName,
    itemName: item.body.title,
    itemId: itemId,
    price: price,
    quantity: quantity,
    totalPrice: totalPrice
  },
  item: {
    id: item._id,
    title: item.body.title,
    description: item.body.description,
    image: item.body.image,
    price: item.body.price,
    creator: creator.body
  },
  creator: {
    email: userEmail,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    displayName: userDisplayName,
    phoneNumber: req.body.phoneNumber,
    walletNumber: req.body.walletNumber,
    profilePic: req.body.profilePic,
    description: req.body.description,
    introVideo: req.body.introVideo
  }
}