import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [phoneNumber, setPhone] = useState("");
	const [count, setCount] = useState(0);
	const [peopleList, setPeopleList] = useState([]);
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setCount(count + 1);
		}, 1000);
	}, [count]);

	const save = async () => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const phoneRegex = /^(\+91)?[6789]\d{9}$/;

		if (!emailRegex.test(email)) {
			alert("Invalid Email Id.");
			return;
		}

		if (!phoneRegex.test(phoneNumber)) {
			alert("Invalid Phone Number.");
			return;
		}

		const newPerson = { name, email, age, phoneNumber };
		setPeopleList([...peopleList, newPerson]);

		setName("");
		setEmail("");
		setAge("");
		setPhone("");

		setShowPopup(true);
	};

	const closePopup = () => {
		setShowPopup(false);
	};

	return (
		<div className="App">
			<div className="input-group">
				<label>Name</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter Your Name"
					required
				></input>
			</div>

			<div className="input-group">
				<label>Email</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter Your Email"
					required
				></input>
			</div>

			<div className="input-group">
				<label>Age</label>
				<input
					type="number"
					id="age"
					value={age}
					onChange={(e) => setAge(e.target.value)}
					placeholder="Enter Your Age"
					required
				></input>
			</div>

			<div className="input-group">
				<label>Phone Number</label>
				<input
					type="number"
					id="phoneNumber"
					value={phoneNumber}
					onChange={(e) => setPhone(e.target.value)}
					placeholder="Enter Your Phone Number"
					required
				></input>
			</div>

			<button onClick={save}>Save</button>

			{showPopup && (
				<div className="popup">
					<div className="popup-content">
						<span className="close" onClick={closePopup}>
							&times;
						</span>
						<h2>Details Saved!</h2>
						<p>Your details have been successfully saved.</p>
					</div>
				</div>
			)}

			<div>
				<h1 style={{ width: "25vw" }}>List of people already added:</h1>
				{peopleList.map((person, index) => (
					<div
						key={index}
						style={{
							width: "25vw",
							backgroundColor: "#35D841",
							padding: 2,
							borderRadius: 10,
							marginBlock: 10,
							margin: 10,
							justifyContent: "left",
						}}
					>
						<p style={{ fontSize: 20, color: "white" }}>
							Name: {person.name}
							<br />
							Email: {person.email}
							<br />
							Age: {person.age}
							<br />
							Phone Number: {person.phoneNumber}
						</p>
					</div>
				))}
			</div>

			<div>
				<p>Time Count from the past site reload: {count} seconds</p>
			</div>
		</div>
	);
}

export default App;
