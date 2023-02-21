import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../data/questions.json";

function Result() {
	const [result, setResult] = useState(0);
	const { questions } = data;

	useEffect(() => {
		const answer = localStorage.getItem("answer");
		const answerParsed = answer ? JSON.parse(answer) : [];
		const correct = questions.filter((q, i) => q.correct_option.toLowerCase() === answerParsed[i]);

		setResult((correct.length * 100) / questions.length);
	}, []);

	return (
		<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Card>
					<Card.Body>
						<h2 className="text-center my-4">Your Result is: {result}%</h2>
						<div className="w-100 text-center my-2">
							<Button style={{ width: "200px" }}>
								<Link className="text-white text-decoration-none" to={"/feedback"}>
									See your feedback
								</Link>
							</Button>
						</div>
						<div className="w-100 text-center my-2">
							<Button style={{ width: "200px" }}>
								<Link className="text-white text-decoration-none" to={"/"}>
									Wanna Try Again!
								</Link>
							</Button>
						</div>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}

export default Result;
