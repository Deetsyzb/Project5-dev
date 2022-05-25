const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User.js");
// const Group = require("../models/Group.js");

const bcrypt = require("bcrypt");

const hash = bcrypt.hashSync('123', 10);

mongoose.connect('mongodb://127.0.0.1:27017/project5', () => {
	console.log('connected to mongodb');
});

const userSeeds = [
	{
		username: 'Cheok',
		email: 'gcheok88@gmail.com',
		password: hash,
	},
	{
		username: 'Deshawn',
		email: 'deshawn@gmail.com',
		password: hash,
	}, 
];

const runSeeder = async () => {
	console.log('test');
	// delete all existing records in the DB
	await User.deleteMany({});
	// inserts seed data
	const users = await User.insertMany(userSeeds);
	console.log('Inserted userSeeds. This is the result: ', users);
	// find all names in the db
	const allNames = await User.find().select('name');
	console.log('All the users in our app', allNames);
	// get all the userIds
	const userIds = allNames.map((el) => el._id);
	console.log('All the userIds in our app', userIds);
};

runSeeder().then(() => {
	mongoose.connection.close();
});
