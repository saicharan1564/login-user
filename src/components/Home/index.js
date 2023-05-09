import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {message: 'Login'}

  loginButton = () => {
    this.setState(prevState => ({
      message: prevState.message === 'Login' ? 'Logout' : 'Login',
    }))
  }

  render() {
    const {message} = this.state
    const loginMessage = message === 'Login' ? 'Please Login' : 'Welcome User'

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">{loginMessage}</h1>
          <button type="button" className="button" onClick={this.loginButton}>
            {message}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
