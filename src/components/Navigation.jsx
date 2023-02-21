import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navigation() {
	const navigate = useNavigate();
	const { currentUser, logout } = useAuth();
	const [error, setError] = useState("");

	const handleLogout = async () => {
		try {
			setError("");
			await logout();
			navigate("/login");
		} catch {
			setError("Failed to Log out");
		}
	};

	return (
		currentUser && (
			<Navbar className="bg-white shadow-sm" sticky="top">
				<Container>
					<Navbar.Brand href="/">Kwizz</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link to="/" as={NavLink}>
							Quiz
						</Nav.Link>
						<Nav.Link to="/feedback" as={NavLink}>
							Feedback
						</Nav.Link>
						<Nav.Link to="/result" as={NavLink}>
							Result
						</Nav.Link>
					</Nav>
					<Button className="btn btn-sm" variant="info" onClick={handleLogout}>
						Logout
					</Button>
				</Container>
			</Navbar>
		)
	);
}

export default Navigation;
