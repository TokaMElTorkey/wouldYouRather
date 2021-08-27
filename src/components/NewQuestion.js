
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { handleAddQuestion } from '../actions/questions'

export class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    submitDisabled: true
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const question = {
      optionOneText: this.optionOne.value,
      optionTwoText: this.optionTwo.value,
      author: this.props.authedUser
    }
    dispatch(handleAddQuestion(question))
    this.props.history.push('/')

  }

  handleInputOneChange = () => {
    this.setState({
      optionOne: this.optionOne.value,
    })
  }

  handleInputTwoChange = () => {
    this.setState({
      optionTwo: this.optionTwo.value,
    })
  }
    
  render() {
    return (
      <div className='text-center add-q'>
        <h1 className='AuthTitle'>Create New Question</h1>
        <div className='create-question-box-content'>
          <h3 className='helerText'>Would you rather ...</h3>
          <form onSubmit={this.handleSubmit}>
            <input 
              value={this.state.optionOne}
              type='text' 
              placeholder='Option One' 
              ref={(input) => this.optionOne = input}
              onChange={this.handleInputOneChange}
            />
            <span>  OR  </span>
            <input 
              value={this.state.optionTwo}
              type='text' 
              placeholder='Option Two' 
              ref={(input) => this.optionTwo = input}
              onChange={this.handleInputTwoChange}
            />
            <div>
            <button
              type='submit'
              disabled={(this.state.optionOne.value === '' || this.state.optionTwo.value === '')}
            >Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }){
  return{ authedUser }

}

export default withRouter(connect(mapStateToProps)(NewQuestion))