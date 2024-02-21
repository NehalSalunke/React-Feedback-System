import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
function FeedbackItem({ feedback, handleDelete }) {
  // console.log(feedback)
  return (
    <Card>
      <FaBeer />
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text} </div>
      <button onClick={handleDelete} className="close">
        <FaTimes className="purple" />
      </button>
    </Card>
  );
}

export default FeedbackItem;
