import drumKits from './drumKits';

const playSound = (keyNum, drumVolume) => {
	const id = drumKits[keyNum].id;
	const playDrum = document.getElementById(id);
	playDrum.volume = drumVolume;

	setTimeout(() => {
		var playPromise = playDrum.play();
		if (playPromise !== undefined) {
			playPromise
				.then((_) => {
					// Automatic playback started!
					//Show playing UI.
				})
				.catch((error) => {
					// Auto-play was prevented.
				});
		}
	}, 350);
};

export default playSound;
