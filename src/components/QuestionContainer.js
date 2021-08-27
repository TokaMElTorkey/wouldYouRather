import React, { Component } from 'react'

export class Question extends Component {
  render() {
    const { user, question, answer } = this.props
    const otherOption = (answer === 'optionOne') ? 'optionTwo' : 'optionOne'
    
    return (
      <div className='question-box'>
        <div className='user-name-avatar'>
          <img alt='user avatar' src={user.avatarURL} className='question-box-content-author-avatar' />
          <span>{user.name} asks:</span> 
        </div>
        <div className='question-box-content'>
          {answer !== null 
            ? (
              <div className='question'>
                <h3 className='question-title'>You would rather:</h3>
                <div className='question-options'>
                  <p>{question[answer].text} <span> Than </span> {question[otherOption].text} </p>
                </div>
                <a href={`/questions/${question.id}`} className='view-vote'>
                View Vote
                </a>
              </div>
            )
            : (
              <div className='question'>
                <h3 className='question-title'>Would you rather ...</h3>
                <div className='question-options'>
                  <p>{question.optionOne.text} <span> OR </span> {question.optionTwo.text} </p>
                </div>
                <a href={`/questions/${question.id}`} className='view-vote'>
                View Vote
                </a>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default Question