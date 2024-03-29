function FeedbackStats({ feedbacks }) {
  let average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;

    average=average.toFixed(1).replace(/[.,]0$/,'')    
    return(
        <div className="feedback-stats">
            <h4> {feedbacks.length} reviews</h4>
            <h4> average rating: {isNaN(average)? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats;
