import React from 'react'

const AnsweredQ = ({ data }) => {
  
  const { users, question, authedUser } = data
  
  const chosenAnswer = users[authedUser].answers[question.id]
  const otherOption = (chosenAnswer === 'optionOne') ? 'optionTwo' : 'optionOne'

  return (
      <div className='text-center q-card'>
        <div className='question-by'>
          <img alt='user avatar' src={users[question.author].avatarURL} />
          <span>Asked by {users[question.author].name}</span>
        </div>
        <div>
          <h3>Results:</h3>
          <div>
            <div>
              <h4><span>You would rather</span> {question[chosenAnswer].text}</h4>
              <p>{(( (question[chosenAnswer].votes.length) / (question.optionOne.votes.length + question.optionTwo.votes.length ) * 100).toFixed())}% and this is {question[chosenAnswer].votes.length} out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes </p>
            </div>
            <div>
              <h4><span>Than</span> {question[otherOption].text}</h4>
              <p className='result-stats percent'>{((( question[otherOption].votes.length) / (question.optionOne.votes.length + question.optionTwo.votes.length ) * 100).toFixed())}% and this is {question[otherOption].votes.length} out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AnsweredQ 