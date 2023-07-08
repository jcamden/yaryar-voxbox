import React, {useEffect, useMemo} from 'react';
import {Box, useStdout} from 'ink';

import useScreenSize from '../../hooks/useScreenSize.js';

export const Screen = ({children}: {children: React.ReactNode}) => {
	const {height, width} = useScreenSize();
	const {stdout} = useStdout();

	useMemo(() => stdout.write('\u001B[?1049h'), [stdout]);
	useEffect(
		() => () => {
			stdout.write('\u001B[?1049l');
		},
		[stdout],
	);

	return (
		<Box
			flexDirection="row"
			alignItems="center"
			justifyContent="center"
			borderStyle="bold"
			borderColor="greenBright"
			height={height}
			width={width}
		>
			{children}
		</Box>
	);
};
