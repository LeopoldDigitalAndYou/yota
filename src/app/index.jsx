import 'script!jquery';
import 'script!foundation-sites/dist/js/foundation.min';
import React from 'react';
import ReactDOM from 'react-dom';

$(document).ready(function ($) {
	$(document).foundation();
});

ReactDOM.render(
		<h1>Hello, world!</h1>,
		document.getElementById('reactRoot')
);
