import React, {useContext} from 'react';
// Import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

import {useTextInput} from '../../hooks/useTextInput/useTextInput.js';
import {StateContext} from '../../state/state.js';
// Import {Box} from 'ink';
import {Screen} from '../Screen/Screen.js';

export const Ui = () => {
	useTextInput();
	const {text} = useContext(StateContext);
	return (
		<Screen>
			{text && <BigText text={text} font="block" colors={['white', 'candy']} />}
		</Screen>
	);
};
