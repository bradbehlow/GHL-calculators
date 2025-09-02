const { MongoClient } = require("mongodb");

exports.handler = async function (event, context) {
  // Only allow GET requests
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("test");
    const collection = db.collection("users");

    // Find the main user (where userLocationId is null or empty)
    const user = await collection.findOne({
      $or: [
        { userLocationId: null },
        { userLocationId: "" },
        { userLocationId: { $exists: false } },
      ],
    });

    await client.close();

    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Main user not found" }),
      };
    }

    // Return the access token and companyId
    return {
      statusCode: 200,
      body: JSON.stringify({
        accessToken: user.accessToken,
        companyId: user.companyId,
      }),
    };
  } catch (error) {
    console.error("Error fetching token from MongoDB:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
