#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';

// Import meow from 'meow';
import App from './app.js';

// Const cli = meow(
// 	`
// 	Usage
// 	  $ yaryar-voxbox

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ yaryar-voxbox --name=Jane
// 	  Hello, Jane
// `,
// 	{
// 		importMeta: import.meta,
// 		flags: {
// 			name: {
// 				type: 'string',
// 			},
// 		},
// 	},
// );

render(<App />);
