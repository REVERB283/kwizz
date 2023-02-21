import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../data/questions.json";

function QuizFeedback() {
	const { questions } = data;
	const [answers, setAnswers] = useState(new Array(questions.length).fill(""));

	useEffect(() => {
		const answer = localStorage.getItem("answer");
		setAnswers((prev) => (answer ? JSON.parse(answer) : prev));
	}, []);

	return (
		<Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Card>
					<Card.Body>
						<h2 className="text-center mt-4">Here is the feedback</h2>
						<Row className="my-3">
							<Col sm={12}>
								{questions.map((q, i) => {
									return (
										<Alert
											className="text-center fw-bold"
											variant={`${answers[i] && q.correct_option.toLowerCase() === answers[i].toLowerCase() ? "success" : "danger"} `}
											key={q.question_id}
										>
											Question {i + 1}
										</Alert>
									);
								})}
							</Col>
						</Row>
						<div className="w-100 text-center my-2">
							<Button style={{ width: "200px" }}>
								<Link className="text-white text-decoration-none" to={"/result"}>
									Check your result
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

export default QuizFeedback;
