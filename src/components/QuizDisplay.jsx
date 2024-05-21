import { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";

export default function QuizDisplay({ display, question, handleDisplay, handleAnswer }) {
	const [prompt, setPrompt] = useState("");
	const [answers, setAnswers] = useState([]);
	// const [buttonRed, setButtonRed] = useState("");

	useEffect(() => {
		if (question !== null) {
			setPrompt(question.question);
			setAnswers(question.answers || []);
		} else {
			setPrompt("Let's see what you've got!");
		}
	}, [question]);

	// const handleButtonColor = (correct) => {
	// 	if(correct) {

	// 	}
	// }

	return (
		<div className="section-main">
			{display === 0 ? (
				<Container className="main-content">
					<Row className="center-horizontal">
						<h3>{prompt}</h3>
						<Button onClick={handleDisplay} className="section-btn">
							Start
						</Button>
					</Row>
				</Container>
			) : (
				<Container className="main-content">
					<Row className="center-horizontal">
						<h3>{prompt}</h3>
					</Row>
					<div className="empty-space-sm" />
					{answers &&
						answers.map((answer, index) => (
							<Row key={index} className="center-horizontal">
								<Button
									className={`section-btn ${!answer.correct ? "btn-red" : ""}`}
								>
									{answer.answer}
								</Button>
							</Row>
						))}
				</Container>
			)}
		</div>
	);
}
