import fs from 'node:fs';

import {getCacheDir} from './getCacheDir.js';

const dir = getCacheDir();

export const initCache = () => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
};
