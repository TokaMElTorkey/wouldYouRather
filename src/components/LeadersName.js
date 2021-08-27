import React, { Component } from 'react'
import { connect } from 'react-redux'

export class LeadersName extends Component {
  render() {
    const {
      users
    } = this.props
    const usersIds = Object.keys(users).sort((a,b)=>((users[b].questions.length+Object.keys(users[b].answers).length)- (users[a].questions.length+Object.keys(users[a].answers).length)))

    return (
      <div className='text-center'>
        <h1 className='AuthTitle'>Leaderboard</h1>
          {usersIds.map((uid)=> (
            <div key={uid.id}>
              <div className='leaderboard-box'>
                <div className='leaderboard-avatar-name'>
                  <img src={users[uid].avatarURL} alt='user avatar' />
                  <span>{users[uid].name}</span>
                </div>

                <div className='leaderboard-details'>
                  <p className="d-inline-block"> Answered Questions <span> {Object.keys(users[uid].answers).length} </span> | </p>
                  <p className="d-inline-block"> Created Questions <span> {users[uid].questions.length} </span> | </p>
                  <p className="d-inline-block"> Score <span> {Object.keys(users[uid].answers).length + users[uid].questions.length} </span></p>
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

function mapStateToProps ({ users })  {
  return {
    users,
  }
}

export default connect(mapStateToProps)(LeadersName)