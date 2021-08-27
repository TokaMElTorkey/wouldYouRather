import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './QuestionContainer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export class Dashboard extends Component {
  render() {
    const {
      answeredQ,
      unAnsweredQ,
      questions,
      users,
      authedUser,
    } = this.props
    
    return (
      <Tabs className='tabs-div'>
        <div className='box-header'>
          <TabList className='tabs-titles'>
            <Tab>Answered Questions</Tab>
            <Tab>Unanswered Questions</Tab>
          </TabList>
        </div>

        <TabPanel>
        {answeredQ.map(id => (
          <Question key={id} question={questions[id]} user={users[questions[id].author]}  answer={users[authedUser].answers[id]} />
        ))}
        </TabPanel>
        <TabPanel>
        {unAnsweredQ.map(id => (
          <Question key={id} question={questions[id]} user={users[questions[id].author]}  answer={null} />
        ))}
        </TabPanel>
      </Tabs>        
    )
  }
}


const mapStateToProps = ({ questions, users, authedUser }) => {
  const questionsIds = Object.keys(questions)
  const answeredQ = Object.keys(users[authedUser].answers).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
  const unAnsweredQ = questionsIds.filter(q => !answeredQ.includes(q)).sort((a,b)=> questions[b].timestamp - questions[a].timestamp)

  return {
    answeredQ,
    unAnsweredQ,
    authedUser,
    questions,
    users,
  }
}

export default connect(mapStateToProps)(Dashboard)