import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";

function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					<Form>
						<Form.Group id="email" cla>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id="confirmPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" ref={confirmPasswordRef} required />
						</Form.Group>
						<Button className="w-100" type="submit">
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100">Already have an account? Login</div>
		</>
	);
}

export default Signup;
