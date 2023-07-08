export const logPlayerErr = (error: any) => {
	if (error && error !== 1) {
		console.log('There was an error:');
		console.log(JSON.stringify(error, null, 3));
	}
};
