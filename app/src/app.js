import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';

const app = document.getElementById('app');
const style = {
	width: "100",
	height: "100"
}
ReactDOM.render(
	<Map style={style}></Map>,
app);
