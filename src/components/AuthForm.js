import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


export class AuthUser extends Component {
  choosenUser = 'none'

  handleChange = (choosenUser) => {
    this.choosenUser = choosenUser
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.choosenUser != 'none'){
      this.props.dispatch(setAuthedUser(this.choosenUser))
    }
  }
  render() {
    const { users} = this.props
    const userIds = Object.keys(users)

    return (
      <div className='text-center'>
        <h1 className='AuthTitle'>Would You Rather App!</h1>
        <p className='helerText'>Please Login By Choose An Account From Selec Menu</p>
        <div className='form-container'>
          <div className='d-inline-block img-div'>
          </div>
          <div className='authForm d-inline-block'>
          <select onChange={(e)=>this.handleChange(e.target.value)} className='select-menu'>
            <option value='value' >Select User</option>
                {userIds.map((userId)=>(
                    <option key={userId} className='option-tag' value={userId}>{users[userId].name}</option>     
                ))}
            </select>
            <button onClick={this.handleSubmit}>
              Sign In
              </button>
          </div>
        </div>        
      </div>
    )
  }
}

function mapStateToProps ({ users })  {

  return {
    users,
  }
}

export default connect(mapStateToProps)(AuthUser)