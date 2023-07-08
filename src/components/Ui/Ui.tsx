import React, {useContext, useEffect, useState} from 'react';
import {Box, Text} from 'ink';
// Import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

import {useHotAudio} from '../../hooks/useKeepAudioHot.js';
import {useLog} from '../../hooks/useLog.js';
import useScreenSize from '../../hooks/useScreenSize.js';
import {useTextInput} from '../../hooks/useTextInput.js';
import {DispatchContext, StateContext} from '../../state/state.js';
import {keepAudioHot} from '../../utils/tts/keepAudioHot.js';
import {Screen} from '../Screen/Screen.js';

export const Ui = () => {
	const {text, childProcesses, logs, timeouts} = useContext(StateContext);
	const {width} = useScreenSize();
	useTextInput();
	useHotAudio();

	const [showBackgroundStuff, setShowBackgroundStuff] = useState(false);

	const [showLogs, setShowLogs] = useState(false);

	return (
		<Screen>
			<Box
				flexDirection="column"
				justifyContent="flex-start"
				// borderColor="blueBright"
				// borderStyle="classic"
				width={width}
				paddingLeft={1}
				marginTop={-1}
			>
				{showBackgroundStuff && (
					<>
						<Box
							borderColor="blueBright"
							borderStyle="classic"
							marginTop={-1}
							marginLeft={-2}
						>
							<Text color="cyanBright">child processes</Text>
							<Text color="grey"> and </Text>
							<Text color="magentaBright">timeouts</Text>
						</Box>

						<Box flexDirection="column">
							{childProcesses.map(childProcesses => (
								<Box key={childProcesses.childProcess.pid}>
									<Text color="cyanBright">{`${
										childProcesses.childProcess.pid
											? childProcesses.childProcess.pid
											: ''
									} ${childProcesses.name}`}</Text>
								</Box>
							))}
						</Box>
						<Box flexDirection="column">
							{timeouts.map((timeout, index) => (
								<Box key={`${index}${timeout.name}`}>
									<Text color="magentaBright">{`${timeout.name}`}</Text>
								</Box>
							))}
						</Box>
					</>
				)}
			</Box>
			{text && <BigText text={text} font="block" colors={['white', 'candy']} />}
			<Box
				// borderColor="greenBright"
				// borderStyle="classic"
				width={width}
				flexDirection="column"
				justifyContent="flex-start"
				paddingLeft={1}
				overflow="hidden"
				marginBottom={-1}
			>
				{showLogs && (
					<>
						{logs.map((logItem, index) => (
							<Box key={`${logItem}${index}`}>
								<Text>{logItem}</Text>
							</Box>
						))}
					</>
				)}
			</Box>
		</Screen>
	);
};
