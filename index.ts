import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import router from './routes/userRoutes';

mongoose.connect('mongodb://127.0.0.1:27017/project5', () => {
	console.log('connected to mongodb');
});

const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

app.use(
	cors({
		credentials: true,
		origin: FRONTEND_URL,
	})
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

app.use(router);

const PORT = process.env.PORT || 3004;
app.listen(PORT);

// Sockets
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
// 	cors: {
// 		origin: 'http://localhost:3000',
// 		methods: ['GET', 'POST', 'PUT', 'DELETE'],
// 	},
// });

// io.on('connection', (socket) => {
// 	console.log(`User Connected:`, socket.id);

// 	socket.on('join_room', (data) => {
// 		socket.join(data);
// 		console.log(`User with ID ${socket.id} joined room ${data}`);
// 	});
// 	socket.on('send_message', (data) => {
// 		socket.to(data.room).emit('receive_message', data);
// 	});

// 	socket.on('send-changes', (delta) => {
// 		socket.broadcast.emit('receive-changes', delta);
// 	});

// 	socket.on('disconnect', () => {
// 		console.log('User Disconnected:', socket.id);
// 	});
// });

// httpServer.listen(3001, () => {
// 	console.log('Server listening on port 3001');
// });
