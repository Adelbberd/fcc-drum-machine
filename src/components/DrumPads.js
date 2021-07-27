import React from 'react';
import playSound from '../sounds/playSound';
import drumKits from '../sounds/drumKits';
import keyPressed from '../sounds/keyPressed';
import changeName from '../redux-actions/changeName';
import { useDispatch, useSelector } from 'react-redux';

const DrumPads = () => {
	/* Drum pad keys component.
	 It plays drum effects when clicked or pressed.
	*/
	const dispatch = useDispatch();
	const vol = useSelector((state) => state.setVolume);

	const handleClick = (keyNum) => {
		dispatch(changeName(drumKits[keyNum].name));
		playSound(keyNum, vol);
	};

	document.addEventListener('keydown', (event) => {
		if ([81, 87, 69, 65, 83, 68, 90, 88, 67].includes(event.keyCode)) {
			dispatch(changeName(drumKits[event.keyCode].name));
			keyPressed(event, vol);
		}
	});

	return (
		<div className="grid-container flex-items">
			<div
				className="drum-pad grid-items"
				id={drumKits[81].name}
				onClick={() => {
					handleClick(81);
				}}
			>
				<audio src={drumKits[81].src} className="clip" id="Q"></audio>Q
			</div>

			<div
				className="drum-pad grid-items"
				id={drumKits[87].name}
				onClick={() => {
					handleClick(87);
				}}
			>
				<audio src={drumKits[87].src} className="clip" id="W"></audio>W
			</div>

			<div
				className="drum-pad grid-items"
				id={drumKits[69].name}
				onClick={() => {
					handleClick(69);
				}}
			>
				<audio src={drumKits[69].src} className="clip" id="E"></audio>E
			</div>

			<div
				className="drum-pad grid-items"
				id={drumKits[65].name}
				onClick={() => {
					handleClick(65);
				}}
			>
				<audio src={drumKits[65].src} className="clip" id="A"></audio>A
			</div>

			<div
				className="drum-pad grid-items"
				id={drumKits[83].name}
				onClick={() => {
					handleClick(83);
				}}
			>
				<audio src={drumKits[83].src} className="clip" id="S"></audio>S
			</div>

			<div
				className="drum-pad grid-items"
				id={drumKits[68].name}
				onClick={() => {
					handleClick(68);
				}}
			>
				<audio src={drumKits[68].src} className="clip" id="D"></audio>D
			</div>

			<div
				className="drum-pad grid-items"
				id={drumKits[90].name}
				onClick={() => {
					handleClick(90);
				}}
			>
				<audio src={drumKits[90].src} className="clip" id="Z"></audio>Z
			</div>

			<div
				className="drum-pad grid-items"
				id={drumKits[88].name}
				onClick={() => {
					handleClick(88);
				}}
			>
				<audio src={drumKits[88].src} className="clip" id="X"></audio>X
			</div>

			<div
				className="drum-pad grid-items"
				id={drumKits[67].name}
				onClick={() => {
					handleClick(67);
				}}
			>
				<audio src={drumKits[67].src} className="clip" id="C"></audio>C
			</div>
		</div>
	);
};

export default DrumPads;
