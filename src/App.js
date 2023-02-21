import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import QuizFeedback from "./pages/QuizFeedback";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Navigation />
				<Routes>
					<Route path="/" element={<PrivateRoute />}>
						<Route path="/" element={<Quiz />} />
						<Route path="/feedback" element={<QuizFeedback />} />
						<Route path="/result" element={<Result />} />
					</Route>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
