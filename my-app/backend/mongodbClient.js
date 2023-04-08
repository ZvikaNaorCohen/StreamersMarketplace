const { MongoClient, ServerApiVersion } = require('mongodb');
const username = encodeURIComponent("eliranzeitouni");
const password = encodeURIComponent("7whHTXefWlWGkXeF");
const uri = `mongodb+srv://${username}:${password}@afcluster.atpou3v.mongodb.net/?retryWrites=true&w=majority`;
let client;

export async function init_mongo_connection()
{
  try {
    client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    console.log("Failed in init_mongo_connection");
    console.log(error);
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

// export async function load_all_objects_async(collection_name) {
//   try {
//       const db = client.db();

//       const collection = await db.collection(collection_name);
//       const items = await collection.find().toArray();
//       console.log("finished loading all files ", items.length);
//       return items;
//   } catch (error) {
//       console.log("failed in load_all_objects_async");
//       console.log(error);
//       throw error;
//   }
// }


// export async function find_object_byId_async(collection_name, id) {
//   try {
//       const db = client.db();
//       const collection = db.collection(collection_name);
//       let o_id = new mongo.ObjectID(id);
//       return await collection.findOne({ "_id": o_id });
//   } catch (error) {
//       console.log("failed in mongo.find ");
//       console.log(error);
//       throw error;
//   }
// }


// export async function find_object_byGoogleId_async(collection_name, id) {
//   try {
//       const db = client.db();
//       const collection = db.collection(collection_name);
//       return await collection.findOne({ "googleId": id });
//   } catch (error) {
//       console.log("failed in mongo.find ");
//       console.log(error);
//       throw error;
//   }
// }

// export async function update_object_async(collection_name, id, next_configuration) {
//   try {
//       const now = new Date();
//       next_configuration.date = now;
//       const collection = client.db().collection(collection_name);
//       let o_id = new mongo.ObjectID(id);
//       return await collection.updateOne({ "_id": o_id }, { $set: next_configuration });
//   } catch (error) {
//       console.log(error);
//       throw error;
//   }
// }

// export async function update_user_byGoogleId_async(collection_name, id, body) {
//   try {
//       const db = client.db();
//       const collection = db.collection(collection_name);
//       const now = new Date();
//       console.log("object found, updating mongo - ", id);
//       await collection.updateOne({ "googleId": id }, { $set: { "body": body, "date": now } }, { "upsert": true });
//   } catch (error) {
//       console.log(error);
//       throw error;
//   }
// }

// export async function add_or_update_object_async(collection_name, id, body) {
//   try {
//       const db = client.db();
//       const collection = db.collection(collection_name);
//       const now = new Date();
//       let o_id = new mongo.ObjectID(id);
//       console.log("object found, updating mongo - ", id);
//       await collection.updateOne({ "_id": o_id }, { $set: { "body": body, "date": now } }, { "upsert": true });
//   } catch (error) {
//       console.log(error);
//       throw error;
//   }
// }

// export async function add_object_async(collection_name, body) {
//   try {
//       const db = client.db();
//       const collection = db.collection(collection_name);
//       const now = new Date();
//       return await collection.insertOne({ "googleId": body.googleId, "body": body, "date": now });
//   } catch (error) {
//       console.log(error);
//       throw error;
//   }
// }

// export async function add_object_async_withGoogleId(googleId, collection_name, body) {
//   try {
//       const db = client.db();
//       const collection = db.collection(collection_name);
//       const now = new Date();
//       return await collection.insertOne({ "googleId": googleId, "body": body, "date": now });
//   } catch (error) {
//       console.log(error);
//       throw error;
//   }
// }



// export async function clean_collection(collection_name) {
//   try {
//       const db = client.db();
//       const collection = db.collection(collection_name);
//       await collection.deleteMany({});
//   } catch (error) {
//       console.log("failed in clean_collection ");
//       console.log(error);
//       throw error;
//   }
// }

// export async function delete_file_async(collection_name, itemId) {
//   try {
//       const db = client.db();
//       const collection = db.collection(collection_name);
//       let o_id = new mongo.ObjectID(itemId);

//       await collection.deleteOne({ "_id": o_id });
//   } catch (error) {
//       console.log("failed in delete_file_async");
//       console.log(error);
//       throw error;
//   }
// }


// export async function delete_document_byGoogleId_async(collection_name, id) {
//   try {
//       const db = client.db();
//       const collection = db.collection(collection_name);

//       await collection.deleteMany({ "googleId": id });
//   } catch (error) {
//       console.log("failed in delete_async");
//       console.log(error);
//       throw error;
//   }
// }
