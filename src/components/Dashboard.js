import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './QuestionContainer';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export class Dashboard extends Component {
  
  state = {
    activeTab :"AnsweredQ"
  }

  handleswitch = (activeTab) => {
    this.setState(() => ({
      activeTab,
    }));
  };
  
  render() {
    const {answeredQ,unAnsweredQ} = this.props
    return (
      
    <div>
      <div className='text-center'>
        <button onClick={() => this.handleswitch('answeredQ')} className='as-tab-btn'>
          Answered Questions
        </button>
        <button onClick={() => this.handleswitch('unAnsweredQ')} className='as-tab-btn'>
          Unanswered Questions
        </button>
      </div>

      {this.state.activeTab=== 'answeredQ' ? (
        <div>
          {answeredQ.map((id) => (
            <div key={id}>
              <Question key={id} question={this.props.questions[id]} user={this.props.users[this.props.questions[id].author]}  answer={this.props.users[this.props.authedUser].answers[id]} />
            </div>
          ))}
        </div>
        ) : (
          <div>
            {unAnsweredQ.map((id) => (
              <div key={id}> 
              {<Question key={id} question={this.props.questions[id]} user={this.props.users[this.props.questions[id].author]}  answer={null} />}
              </div>
            ))}
          </div>
          
        )}
    </div>            
    )
  }
}


function mapStateToProps ({ questions, users, authedUser }) {
  const questionsIds = Object.keys(questions)
  const answeredQ = Object.keys(users[authedUser].answers).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
  const unAnsweredQ = questionsIds.filter(qid => !answeredQ.includes(qid)).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)

  return {
    answeredQ,
    unAnsweredQ,
    authedUser,
    questions,
    users,
  }
}

export default connect(mapStateToProps)(Dashboard)