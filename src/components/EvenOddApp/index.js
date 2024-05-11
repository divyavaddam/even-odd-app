// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    buttonClicked: false,
    randomNum: 0,
  }

  onButtonClick = () => {
    this.setState(prevState => ({
      buttonClicked: true,
      randomNum: prevState.randomNum + Math.ceil(Math.random() * 100),
    }))
  }

  changeHeading = () => {
    const {buttonClicked, randomNum} = this.state
    if (buttonClicked === true) {
      return <h1 className="heading">Count {randomNum}</h1>
    }
    return <h1 className="heading">Count 0</h1>
  }

  changePara = () => {
    const {buttonClicked, randomNum} = this.state
    if (buttonClicked === true && randomNum % 2 !== 0) {
      return <p className="para">Count is Odd</p>
    }
    return <p className="para">Count is Even</p>
  }

  render() {
    return (
      <div className="bg-container">
        {this.changeHeading()}
        {this.changePara()}
        <button className="button" type="button" onClick={this.onButtonClick}>
          Increment
        </button>
        <p className="note">*Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
