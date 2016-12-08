import 'script!jquery';
import 'script!foundation-sites/dist/js/foundation.min';
import React from 'react';
import ReactDOM from 'react-dom';

import ListItem from './list-item/list-item';

// Start Foundation
$(document).ready(function ($) {
	$(document).foundation();
});

ReactDOM.render(
		<ul>
			<ListItem title="Configure Webpack" done={true}/>
			<ListItem title="Learn React" done={false}/>
			<ListItem title="Set up an Express server" done/>
			<ListItem/>
		</ul>,
		document.getElementById('reactRoot')
);
