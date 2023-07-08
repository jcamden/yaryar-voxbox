import {useContext, useEffect, useState} from 'react';

import {DispatchContext} from '../state/state.js';
import {keepAudioHot} from '../utils/tts/keepAudioHot.js';

import {useLog} from './useLog.js';

export const useHotAudio = () => {
	const dispatch = useContext(DispatchContext);
	const {log} = useLog();
	useEffect(() => {
		keepAudioHot(dispatch, log, 0);
	}, []);
};
