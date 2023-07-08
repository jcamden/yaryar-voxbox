import {cwd} from 'node:process';

export const getAssetsDir = () => cwd() + `/assets`;
