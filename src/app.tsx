import React, {useEffect} from 'react';

import {Ui} from './components/Ui/Ui.js';
import {initCache} from './utils/tts/initCache.js';
import {State} from './state/state.js';

const App = () => {
	initCache();
	console.clear();

	return (
		<State>
			<Ui />
		</State>
	);
};

export default App;
