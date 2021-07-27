const audNameReducer = (state = '', action) => {
	switch (action.type) {
		case 'AUDIO_NAME':
			return action.payload;
		default:
			return state;
	}
};
export default audNameReducer;
