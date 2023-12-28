var express = require("express");
const { MongoClient } = require("mongodb");
var cors = require("cors");
const bodyParser = require("body-parser");

var app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var url = "mongodb+srv://biswanath44:nayak80@cluster0.v7mo1bs.mongodb.net/reactdb?retryWrites=true&w=majority";
var collection;
//Establish a Connection.
MongoClient.connect(url)
  .then((res) => {
    console.log("Connected to mongodb");
    // Access the Collections
    const database = res.db("reactdb");
    collection = database.collection("tableusers"); // Assign to the outer variable
  })
  .catch((error) => {
    console.error("Error Connecting to mongodb:", error);
  });

  // Check if the server is running
  app.get("/dchk",(req,res)=>{
    res.status(200).json({message:"everything is OKAY!"});
  })

  //Acess data
  app.get("/getusers",(req,res)=>{
      collection .find({}) .toArray()
        .then((users) =>{
          res.json(users);
        })
        .catch((error) => {
          console.error("Error Fetching User Data:", error);
          res.status(500).json({ Error: "Internal server error!" });
        });
    });
  
    //Single User insertOne Post
app.post("/RegisterUser",(req,res)=>{
    const User = {
                  id: req.body.id,
              UserId: req.body.UserId,
            UserName: req.body.UserName,
            Password: req.body.Password,
                 Age: req.body.Age,
              Mobile: req.body.Mobile,
          Subscribed: req.body.Subscribed
        }  

    collection .insertOne(User)

    .then((result)=>{
      res.status(201).json(result);
    })

    .catch((error)=>{
      console.error("Error Adding users", error);
      res.status(500).json({error: "Internal Server Error"});
    });
});

//InsertMultiple post
/*app.post("/RegisterUsers",(req,res) => {
  const users = req.body;

  collection .insertMany(users)
  
  .then((result)=>{
    res.status(201).json(result);
  })
  .catch((error)=>{
    console.error("Error Adding users", error);
    res.status(500).json({error: "Internal Server Error"});
  })
})*/

app.listen(8080, () => {
  console.log("server started");
});
