import React, { useContext } from "react";
import { StateContext } from "../state/state.js";
import { Box, Text } from "ink";
import { useTextInput } from "../useTextInput/useTextInput.js";

export const Ui = () => {
	useTextInput();
	const {text} = useContext(StateContext);
	return <Box height={3} borderStyle="bold" borderColor="greenBright"><Text>{text}</Text></Box>
}
