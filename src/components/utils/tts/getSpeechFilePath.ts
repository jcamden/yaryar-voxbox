import {getCacheDir} from './getCacheDir.js';

export const getSpeechFilePath = (text: string) =>
	`${getCacheDir()}/${text}.mp3`;
