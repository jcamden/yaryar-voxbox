import fs from 'node:fs';
import {cwd} from 'node:process';

export const getIsSpeechCached = (text: string) => {
	try {
		const cacheDir = cwd() + `/cache/`;
		const cached = fs.readdirSync(cacheDir);
		const speechIsCached = cached.includes(`${text}.mp3`);
		return speechIsCached;
	} catch (error: unknown) {
		console.log(error);
		throw error;
	}
};
