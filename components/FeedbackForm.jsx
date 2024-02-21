import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import { useState } from 'react'
function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('your review is too short')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeedback = {
      rating,
      text,
    }
    handleAdd(newFeedback)
    setText('')
  }

  return (
    <Card>
      <form action='' onSubmit={handleSubmit}>
        <h2>how would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            send
          </Button>
          {/* <button type='submit'>send</button> */}
        </div>
        {message && <p>{message}</p>}
      </form>
    </Card>
  )
}

export default FeedbackForm
