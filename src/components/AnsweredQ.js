import React from 'react'

const AnsweredQ = ({ data }) => {
  
  const { users, question, authedUser } = data
  
  const chosenAnswer = users[authedUser].answers[question.id]
  const otherOption = (chosenAnswer === 'optionOne') ? 'optionTwo' : 'optionOne'
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  const choosenAnswerLength = question[chosenAnswer].votes.length
  const totalOption = question[otherOption].votes.length
  const answerPer = (( choosenAnswerLength / totalVotes ) * 100)
  const optionPer = (( totalOption / totalVotes ) * 100)

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
              <p>{answerPer}% and this is {choosenAnswerLength} out of {totalVotes} votes </p>
            </div>
            <div>
              <h4><span>Than</span> {question[otherOption].text}</h4>
              <p className='result-stats percent'>{optionPer}% and this is {totalOption} out of {totalVotes} votes</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AnsweredQ 