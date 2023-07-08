import {getAssetsDir} from './getAssetsDir.js';

export const getAssetFilePath = (filename: string) =>
	`${getAssetsDir()}/${filename}`;
