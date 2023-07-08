import React from 'react';
import BigText from 'ink-big-text';

const NonMemoizedCurrentText = ({text}: {text: string}) =>
	text ? (
		<BigText text={text} font="block" colors={['white', 'candy']} />
	) : null;

export const CurrentText = React.memo(NonMemoizedCurrentText);
