const volReducer = (state = 0.4, action) => {
	switch (action.type) {
		case 'VOLUME':
			return action.payload;
		default:
			return state;
	}
};

export default volReducer;
