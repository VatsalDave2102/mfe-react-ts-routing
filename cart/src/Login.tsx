import React, { useState } from "react";
import { login, useLoggedIn } from "./cart";

// Define the Login component
const Login = () => {
	// Initialize state to store whether the login form is shown
	const [showLogin, setShowLogin] = useState(false);

	// Initialize state to store username and password
	const [username, setUsername] = useState("sally"); // Default username
	const [password, setPassword] = useState("123"); // Default password

	// Check if the user is already logged in
	const loggedIn = useLoggedIn();
	if (loggedIn) return null; // If logged in, don't show the login form

	// Render the login form
	return (
		<>
			{/* Toggle button to show/hide the login form */}
			<span onClick={() => setShowLogin(!showLogin)}>
				<i
					className="ri-fingerprint-line text-2xl text-white"
					id="showlogin"
				></i>
			</span>
			{/* Login form */}
			{showLogin && (
				<div
					className="absolute p-5 border-4 border-blue-800 bg-white"
					style={{ width: 300, top: "2rem", left: -250 }}
				>
					{/* Username input field */}
					<input
						type="text"
						placeholder="User Name"
						value={username}
						onChange={(evt) => setUsername(evt.target.value)}
						className="border text-sm border-gray-400 p-2 rounded-md w-full"
					/>
					{/* Password input field */}
					<input
						type="password"
						value={password}
						onChange={(evt) => setPassword(evt.target.value)}
						className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
					/>
					{/* Login button */}
					<button
						className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
						onClick={() => login(username, password)} // Call the login function when the button is clicked
						id="loginbtn"
					>
						Login
					</button>
				</div>
			)}
		</>
	);
};

// Export the Login component
export default Login;
