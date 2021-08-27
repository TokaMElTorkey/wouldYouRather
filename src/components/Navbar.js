import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null))
  }
  render () {
    const { authedUser, users } = this.props
    return (
      <nav className='navbar'>
        <ul className='nav-items'>
          <li>
            <a href='/'>
              Home
            </a>
          </li>
          <li>
            <a href='/add'>
              New Question
            </a>
          </li>
          <li>
            <a href='/leadersname'>
              Leaderboard
            </a>
          </li>
        </ul>

        {authedUser === null && (
          <p className='warning-msg'> Please Login So You Can Use Our App</p>
        )}

        {authedUser !== null && (
          <div className='authCard'>
            <img alt='welcomeavatar' src={ users[authedUser].avatarURL } />
            <p className='d-inline-block'>Hello, You are now logged in with { users[authedUser].name }</p>
            <button className='' onClick={this.handleLogout}>Sign in with another account </button>
          </div>
        )}
      </nav>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {

  return { authedUser , users}
}

export default connect(mapStateToProps)(Nav)