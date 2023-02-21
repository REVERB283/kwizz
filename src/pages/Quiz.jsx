import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Quiz() {
	const navigate = useNavigate();
	const { logout } = useAuth();
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
		<div>
			<Button onClick={handleLogout}>Logout</Button>
		</div>
	);
}

export default Quiz;
