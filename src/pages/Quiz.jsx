import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import quizData from "../utils/quiz-data.json";
import QuizDisplay from "../components/QuizDisplay";

export default function QuizPage() {
	const [correct, setCorrect] = useState(0);
	const [display, setDisplay] = useState(0);
	const [loaded, setLoaded] = useState(-1);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		setQuestions(quizData);
	}, []);

	const handleDisplay = () => {
		setDisplay(display + 1);
		setLoaded(display);
		if (display === questions.length) {
			setLoaded(-1);
		}
	};

	const handleAnswer = (guess) => {
		if (guess) {
			setCorrect(correct + 1);
		}
	};

	return (
		<div>
			<Container className="main-content">
				<h1>Connor Swanson's Fun Facts Quiz</h1>
				<p>
					<i>See how much you know, and learn about Connor along the way!</i>
				</p>
				<QuizDisplay
					display={display}
					question={loaded !== -1 ? questions[loaded] : null}
					handleDisplay={handleDisplay}
					handleAnswer={handleAnswer}
				/>
			</Container>
		</div>
	);
}
