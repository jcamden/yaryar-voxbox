import React from 'react';

import {State} from './state/state.js';
import {Ui} from './Ui/Ui.js';

export default function App() {
	return (
		<State>
			<Ui />
		</State>
	);
}
