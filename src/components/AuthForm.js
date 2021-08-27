import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { setAuthedUser } from '../actions/authedUser'


export class AuthUser extends Component {
  state = {
    choosenUser: 'none'
  }

  handleChange = (choosenUser) => {
    this.setState(() => ({
        choosenUser: choosenUser.value,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { choosenUser } = this.state
    const { dispatch } = this.props

    dispatch(setAuthedUser(choosenUser))
  }
  render() {
    const { users, userIds } = this.props
    const { choosenUser } = this.state

    const options = []

    userIds.forEach(user=>{
      options.push({ value: users[user].id, label: users[user].name })
    })

    return (
      <div className='text-center'>
        <h1 className='AuthTitle'>Would You Rather App!</h1>
        <p className='helerText'>Please Login By Choose An Account From Selec Menu</p>
        <div className='form-container'>
          <div className='d-inline-block img-div'>
          {choosenUser !== 'none' && <img className='box-avatar' src={users[choosenUser].avatarURL} alt='avatar' />}
          </div>
          <div className='authForm d-inline-block'>
            <form onSubmit={this.handleSubmit}>
              <Select options={options} onChange={this.handleChange} />
              <button disabled={this.state.choosenUser === 'none'}>
              Sign In
              </button>
              </form>
          </div>
        </div>        
      </div>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => {

  return {
    userIds : Object.keys(users),
    users,
  }
}

export default connect(mapStateToProps)(AuthUser)