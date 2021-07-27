const volControl = (payload) => {
	return {
		type: 'VOLUME',
		payload: payload,
	};
};

export default volControl;
