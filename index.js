const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cv3dsgq.mongodb.net/toyMarketPlace?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const db = client.db("toyMarketPlace");
    const categoryCollection = db.collection("animalCategory");
    // const categoryCollection = db.collection("addtoys");

    app.get("/category", async (req, res) => {
      try {
        const cursor = categoryCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to fetch categories" });
      }
    });

    app.get('/category/:id', async (req, res) => {
        try {
          const id = req.params.id;
          const query = { _id: new ObjectId(id) };
          const result = await categoryCollection.findOne(query);
          res.send(result);
        } catch (error) {
          res.status(500).send({ error: 'Failed to fetch toy details' });
        }
      });

    app.get("/addtoys", async (req, res) => {
      try {
        let query = {};
        const sort = req.query.sort;
        
        if (req.query.email) {
          query = { sellerEmail: req.query.email };
        }

        const options = {
          // sort matched documents in descending order by rating
          sort: { 
              "price": sort === 'asc' ? 1 : -1
          }
          
      };
        const result = await categoryCollection.find(query, options).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to fetch toys" });
      }
    });

    app.post("/addtoys", async (req, res) => {
      try {
        const addtoys = req.body;
        const result = await categoryCollection.insertOne(addtoys);
        res.send(result.ops[0]);
      } catch (error) {
        res.status(500).send({ error: "Failed to add toy" });
      }
    });

    app.patch("/addtoys/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const updatedToy = req.body;
        const updateDoc = {
          $set: {
            status: updatedToy.status,
          },
        };
        const result = await categoryCollection.updateOne(filter, updateDoc);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to update toy" });
      }
    });

    app.delete("/addtoys/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await categoryCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to delete toy" });
      }
    });

    app.get("/", (req, res) => {
      res.send("Toy is running");
    });

    app.listen(port, () => {
      console.log(`Toy marketplace server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

connectToDatabase();
