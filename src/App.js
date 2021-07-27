import Display from './components/Display';
import DrumPads from './components/DrumPads';
// import { useState } from 'react';
// import drumKits from './sounds/drumKits';

function App() {
	// Hooks or state
	// const [audioName, setAudioName] = useState('');
	// const [drumVolume, setDrumVolume] = useState(0.4);

	// const changeName = (id) => {
	// 	setAudioName(drumKits[id].name);
	// };

	// const setVolume = (vol) => {
	// 	setDrumVolume(vol);
	// };

	return (
		<div className="drum-machine" id="drum-machine">
			<h1>
				Drum <span className="machine">Machine</span>
			</h1>
			<div className="flex-container">
				<DrumPads />
				<Display />
			</div>
			<footer>
				<p>&copy;2021 - Created by Adelberd Mothusi</p>
			</footer>
		</div>
	);
}

export default App;
