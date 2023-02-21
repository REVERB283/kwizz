import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const navigate = useNavigate();
	const { signup } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (passwordRef.current.value !== confirmPasswordRef.current.value) return setError("Password & Confirm Password don't match");

		try {
			setLoading(true);
			setError("");
			await signup(emailRef.current.value, passwordRef.current.value);
			navigate("/");
		} catch {
			setError("Error creating account");
		}
		setLoading(false);
	};
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form className="px-2" onSubmit={handleSubmit}>
						<Form.Group id="email" className="my-2">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password" className="my-2">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id="confirmPassword" className="my-2">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" ref={confirmPasswordRef} required />
						</Form.Group>
						<Button className="w-100 my-3" type="submit" disabled={loading}>
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center my-2">
				Already have an account? <Link to={"/login"}>Login</Link>
			</div>
		</>
	);
}

export default Signup;
