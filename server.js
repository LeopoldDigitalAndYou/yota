"use strict";

const PORT = 3009;

const express = require('express');
const serveStatic = require('serve-static');
const favicon = require('serve-favicon');

const server = express();

server.use(favicon('./dist/favicon.ico'));

server.use(serveStatic('./dist'));

server.listen(PORT);
