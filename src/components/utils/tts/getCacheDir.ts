import {cwd} from 'node:process';

export const getCacheDir = () => cwd() + `/cache`;
