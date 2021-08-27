import React, { Component } from 'react'
import { connect } from 'react-redux'

import AnsweredQ from './AnsweredQ'
import UnansweredQ from './UnAnsweredQ'

import { handleAddAnswer } from '../actions/questions'

export class QPage extends Component {
  handleAnswer = (answer) => {
    this.props.dispatch(handleAddAnswer(answer))
  }
  render() {
    const { isAnswered } = this.props

    return (
      <div className='box'> 
        {isAnswered !== null
          ? <div>{isAnswered === true 
            ? (
              <AnsweredQ data={this.props} />
            )
            : (
              <UnansweredQ data={this.props} handleAnswer={this.handleAnswer} />
            )
          }</div>
          : <div>404</div>
        }
        
      </div>
    )
  }
}


const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params
  const question = questions[id]
  const isAnswered = question ? Object.keys(users[authedUser].answers).includes(question.id) : null

  return {
    users,
    question,
    isAnswered,
    authedUser
  }
}

export default connect(mapStateToProps)(QPage)