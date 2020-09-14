
const express = require("express");
const app = express(); 
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: "mysql"
});

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

app.get('/allUsers', function(req, res) {
    const users = User.findAll()    
    console.log("All users:", JSON.stringify(users, null, 2));
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});