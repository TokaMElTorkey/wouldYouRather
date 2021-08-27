import React, { Component } from 'react'
import { connect } from 'react-redux'

export class LeadersName extends Component {
  render() {
    const {
      users,
      data
    } = this.props
    return (
      <div className='text-center'>
        <h1 className='AuthTitle'>Leaderboard</h1>
          {data.map((s, index)=> (
            <div className='leader-card' key={s.id}>
              <div className='leaderboard-box'>
                <div className='leaderboard-avatar-name'>
                  <img src={users[s.id].avatarURL} alt='user avatar' />
                  <span>{index+1} {users[s.id].name}</span>
                </div>

                <div className='leaderboard-details'>
                  <p className="d-inline-block"> Answered Questions <span> {s.score - users[s.id].questions.length} </span> | </p>
                  <p className="d-inline-block"> Created Questions <span> {users[s.id].questions.length} </span> | </p>
                  <p className="d-inline-block"> Score <span> {s.score} </span></p>
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const usersIds = Object.keys(users)
  let data = []

  usersIds.forEach(user => {
    const answers = Object.keys(users[user].answers).length
    const questions = users[user].questions.length
    const score = answers + questions

    data.push({ id:user, score })
  })

  return {
    users,
    data: data.sort((a,b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(LeadersName)