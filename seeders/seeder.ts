import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/Users';
import bcrypt from 'bcrypt';

const hash = bcrypt.hashSync('123', 10);

mongoose.connect('mongodb://127.0.0.1:27017/project5', () => {
	console.log('connected to mongodb');
});

const userSeeds = [
	{
		username: 'Cheok',
		email: 'gcheok88@gmail.com',
		password: hash,
		address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
	},
	{
		name: 'Deshawn',
		email: 'deshawn@gmail.com',
		password: hash,
		address: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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