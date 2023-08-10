import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="200" height="200" frameBorder="0" title='loading' className="giphy-embed bg-white"></iframe><p></p>
      </div>
    )
  }
}

export default Loading