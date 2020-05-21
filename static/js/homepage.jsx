"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p>Thanks for stopping in. It's so good to have you here!</p>
        <p>If you'd like to view our really neat trading cards...</p>
        <a href="/cards">Click Here!</a>
        <br></br>
        <img src="/static/img/balloonicorn.jpg"/>
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
