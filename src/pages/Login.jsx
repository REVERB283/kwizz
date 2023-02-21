import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();
	const { currentUser, logout, login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (currentUser) logout();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			setError("");
			await login(emailRef.current.value, passwordRef.current.value);
			navigate("/");
		} catch {
			setError("Error loggin in");
		}

		setLoading(false);
	};

	return (
		<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Card>
					<Card.Body>
						<h2 className="text-center mb-4">Login</h2>
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
							<Button className="w-100 my-3" type="submit" disabled={loading}>
								Login
							</Button>
						</Form>
					</Card.Body>
				</Card>
				<div className="w-100 text-center my-2">
					Need an account? <Link to={"/signup"}>Sign Up</Link>
				</div>
			</div>
		</Container>
	);
}

export default Login;
