
const express = require("express");
const app = express(); 
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sharedatabase', 'root', 'Jagex2233', {
    host: 'localhost',
    dialect: "mysql"
});

class User extends Model {}
class Post extends Model {}

(async () => {
    User.init({
        username: DataTypes.STRING
    }, { sequelize, modelName: 'user' });
    
    Post.init({
        title: DataTypes.STRING,
        text: DataTypes.STRING,
        type: DataTypes.STRING,
        comments: DataTypes.STRING,
        image: DataTypes.STRING,
        likes: DataTypes.INTEGER
    }, { sequelize, modelName: 'post' })
    
    await sequelize.sync({ force: true });
    
    await Post.bulkCreate([{
        title: "THIS IS A C# SNIPPET", 
        text: "", 
        type: "C#", 
        comments: "Hello, Very good snippet, I actually didn't like this, You are a cool person", 
        image: "images/1.jpg", 
        likes: 22
    }, {
        title: "THIS IS A ANOTHER C# SNIPPET", 
        text: "", 
        type: "C#", 
        comments: "Hello, Very good snippet, I actually didn't like this, You are a cool person", 
        image: "images/2.jpg", 
        likes: 4
    }])
    
    await User.bulkCreate([
        { username: "Jane Doe" },
        { username: "John Doe" }
    ])
})();

app.get('/allUsers', async function(req, res) {
    const users = await User.findAll()    
    console.log("All users:", JSON.stringify(users, null, 2));
    res.send(users);
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});