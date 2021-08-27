import React, { Component } from 'react'

class UnansweredQ extends Component {
  state = {
    selectedAnswer: null
  }
  handleChange = (e) => {
    const selected = e.target.value
    this.setState(() => ({
      selectedAnswer: selected
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { selectedAnswer } = this.state
    const { authedUser, question } = this.props.data
    const answer = {
      authedUser,
      qid: question.id,
      answer: selectedAnswer
    }
    this.props.handleAnswer(answer)
  }
  render() {
    const { users, question } = this.props.data
    const { selectedAnswer } = this.state

    return (
      <div className='text-center q-card'>
        <div className='question-by'>
          <img alt='user avatar' src={users[question.author].avatarURL} />
          <span>{users[question.author].name} asks:</span>
        </div>
        <div>
          <h3>Would You Rather...</h3>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <input 
                type='radio'
                value='optionOne'
                defaultChecked={selectedAnswer ==='optionOne'}
                name='option'
              /> {question.optionOne.text} 
              <span> || </span>
            <input 
                type='radio'
                value='optionTwo'
                defaultChecked={selectedAnswer ==='optionTwo'}
                name='option'
              /> {question.optionTwo.text}
            <div>
              <button disabled={selectedAnswer === null}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default UnansweredQ