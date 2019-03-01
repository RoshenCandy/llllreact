import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="color">
	<div className="container">
		<div className="top-header">
			<div className="embl"><a href="#"><h1>Decision mapper</h1></a></div>
			<nav>
				<ul class="buttons">
					<a href="#"><li>work</li></a>
					<a href="#"><li>services</li></a>
					<a href="#"><li>about</li></a>
					<a href="#"><li>tutorials</li></a>
					<a href="#"><li className="contact">contact</li></a>
				</ul>
			</nav>
		</div>
		<div className="lingua_center_text">
			<h1>Lingua.Live</h1>
			<p>Helping language learners grow through conversation with native speakers</p>
		</div>
	</div>
</div>
</header>

</div>
    );
  }
}

export default App;
