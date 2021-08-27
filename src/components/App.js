import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Nav from './Navbar'
import AuthUser from './AuthForm'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import LeadersName from './LeadersName'
import QPage from './QPage'



class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
            <div className='content'>
              {authedUser === null
                ? <AuthUser />
                : (
                  <Fragment>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leadersname' component={LeadersName} />
                    <Route path='/questions/:id' component={QPage} />
                  </Fragment>
                )}
            </div>
          </div>
        </Fragment>
      </Router>
    )
  }
}


function mapStateToProps ({ authedUser}) {
  return {authedUser}
}

export default connect(mapStateToProps)(App)