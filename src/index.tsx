// import express, { Express } from "express"
import { createServer } from 'http';
import reportWebVitals from './reportWebVitals';
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import Chatroom from './components/SetNameChat.jsx';

import Composition from './components/Composition.jsx';
import StoryGenerator from './components/StoryGeneration';



const Homepage = lazy(() => import('./components/Blog/Blog.jsx'));
const SignUpPage = lazy(() => import('./components/SignUp.jsx'));
const SignInPage = lazy(() => import('./components/SignIn.jsx'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard.jsx'));

const rootElement = document.createElement('div');

document.body.appendChild(rootElement);

const root = createRoot(rootElement);

root.render(
	<BrowserRouter>
		<Suspense
			fallback={
				<div>
					//{' '}
					{/* <Backdrop
					// 	sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					// 	open={open}
					// >
					// 	<CircularProgress color='inherit' />
					// </Backdrop> */}
					Loading Page...
				</div>
			}
		>
			<Routes>
				<Route path='storygenerator' element={<StoryGenerator />} />
				<Route path='/' element={<Homepage />} />
				<Route path='chat' element={<Chatroom />} />
				<Route path='signup' element={<SignUpPage />} />
				<Route path='signin' element={<SignInPage />} />
				<Route path='dashboard' element={<Dashboard />} />
			</Routes>
		</Suspense>
	</BrowserRouter>
);

reportWebVitals();
