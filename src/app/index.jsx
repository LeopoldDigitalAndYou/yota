"use strict";

import 'script!jquery';
import 'script!foundation-sites/dist/js/foundation.min';
import React from 'react';
import ReactDOM from 'react-dom';

const uuid = require('uuid/v4');

import TodoList from './todo-list/todo-list';

// Start Foundation
$(document).ready(function ($) {
	$(document).foundation();
});

const todos = [
	{id: uuid(), title: "Configure Webpack", done: true, longDesc: "Build pipeline with React and Foundation"},
	{id: uuid(), title: "Learn React", done: false, longDesc: "Why not make another TODO-list app?\nI know, kind of boring."},
	{id: uuid(), title: "Set up an Express server", done: true},
	{id: uuid(), longDesc: "Curiosity killed the cat, but it also killed the smallpox virus."}
];

ReactDOM.render(
		<TodoList todoItems={todos} />,
		document.getElementById('reactRoot')
);
