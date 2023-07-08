import {Log} from '../../../hooks/useLog.js';

export const logPlayerErr = (error: any, log: Log) => {
	if (error && error !== 1) {
		log('There was an error:');
		log(JSON.stringify(error, null, 3));
	}
};
