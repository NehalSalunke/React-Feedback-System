import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <h1>Feedback App</h1>
        <Routes>
          <Route
            path="/"
            element={
              
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  feedbacks={feedbacks}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path='/' element={<AboutPage/>}></Route>
        </Routes>
        <AboutIconLink></AboutIconLink>
      </div>
    </Router>
  );
}
export default App;
