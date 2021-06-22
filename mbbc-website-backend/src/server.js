import express from "express";
import { MongoClient } from "mongodb";

const app = express();

require("dotenv").config();

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_API_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("mbbc-main-db");

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

app.use(express.json());

app.get("/api/blog-article/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db
      .collection("blog-articles")
      .findOne({ name: articleName });

    res.status(200).json(articleInfo);
  }, res);
});

app.post("/api/blog-article/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db
      .collection("blog-articles")
      .findOne({ name: articleName });

    await db.collection("blog-articles").updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text }),
        },
      }
    );

    const updatedArticleInfo = await db
      .collection("blog-articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.listen(8000, () => console.log("listening on port 8000"));
