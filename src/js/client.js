import React from 'react';
import ReactDOM from 'react-dom';
// remove comment if using redux
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World Test</h1>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
       	</Route>
    </Router>
, app);


// const app = document.getElementById('app');
// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={browserHistory}>
//         	<Route path="/" component={App}>
//         	</Route>
//         </Router>
//     </Provider>
// , app);