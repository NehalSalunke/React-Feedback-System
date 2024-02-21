import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import { motion, useScroll } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({handleDelete }) {
const {feedbacks} = useContext(FeedbackContext)
console.log(feedbacks);
// const{scrollYProgress}=useScroll()
if(!feedbacks || feedbacks.length ===0) return <p>No feedbacks sorry!!</p>
  return (
    <div>
      {/* <FeedbackItem feedbacks={feedbacks} /> */}
     
      {feedbacks.map((feedback) => (
        // <FeedbackItem
        //   feedback={feedback}
        //   key={feedback.id}
        //   handleDelete={() => handleDelete(feedback.id)}
        // />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FeedbackItem
            feedback={feedback}
            key={feedback.id}
            handleDelete={() => handleDelete(feedback.id)}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default FeedbackList;
