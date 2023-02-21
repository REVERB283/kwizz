import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../data/questions.json";

function Quiz() {
	const { questions } = data;
	const navigate = useNavigate();
	const [quiz, setQuiz] = useState(new Array(questions.length).fill(null));

	const handleSubmit = async () => {
		await localStorage.setItem("answer", JSON.stringify(quiz));
		navigate("/result");
	};

	const handleChange = (e, index, checkedValue) => {
		setQuiz((prevValue) => {
			prevValue[index] = checkedValue.toLowerCase();
			return prevValue;
		});
	};

	return (
		<Container className="d-flex align-items-center justify-content-center">
			<div className="w-100" style={{ maxWidth: "800px" }}>
				<Card className="my-5">
					<Card.Body>
						<h2 className="text-center my-4">Take your quiz</h2>
						<Row>
							<Col sm={12}>
								<ol>
									{questions.map((q, i) => {
										return (
											<li sm={12} key={q.question_id}>
												<div>
													<label>{q.question_text}</label>

													<Form>
														<Form.Check type={"radio"} label={q.option_a} id={`option-${i}-a`} name="group1" onChange={(e) => handleChange(e, i, q.option_a)} />
														<Form.Check type={"radio"} label={q.option_b} id={`option-${i}-b`} name="group1" onChange={(e) => handleChange(e, i, q.option_b)} />
														<Form.Check type={"radio"} label={q.option_c} id={`option-${i}-c`} name="group1" onChange={(e) => handleChange(e, i, q.option_c)} />
														<Form.Check type={"radio"} label={q.option_d} id={`option-${i}-d`} name="group1" onChange={(e) => handleChange(e, i, q.option_d)} />
													</Form>
												</div>
											</li>
										);
									})}
								</ol>
							</Col>
							<div className="mb-4 d-flex justify-content-center">
								<Button className="px-4" onClick={handleSubmit}>
									Submit
								</Button>
							</div>
						</Row>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}

export default Quiz;
