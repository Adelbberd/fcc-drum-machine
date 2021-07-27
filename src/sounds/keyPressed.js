import playSound from './playSound';

const keyPressed = (event, drumVolume) => {
	var pressedKey = event.keyCode;
	switch (pressedKey) {
		case 81:
			playSound(81, drumVolume);
			break;
		case 87:
			playSound(87, drumVolume);
			break;
		case 69:
			playSound(69, drumVolume);
			break;
		case 65:
			playSound(65, drumVolume);
			break;
		case 83:
			playSound(83, drumVolume);
			break;
		case 68:
			playSound(68, drumVolume);
			break;
		case 90:
			playSound(90, drumVolume);
			break;
		case 88:
			playSound(88, drumVolume);
			break;
		case 67:
			playSound(67, drumVolume);
			break;
		default:
			break;
	}
};

export default keyPressed;
