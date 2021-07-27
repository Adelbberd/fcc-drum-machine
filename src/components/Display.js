import volControl from '../redux-actions/volControl';
import { useDispatch, useSelector } from 'react-redux';

const Display = () => {
	// Redux state.
	const dispatch = useDispatch();
	const vol = useSelector((state) => state.setVolume);
	const audioName = useSelector((state) => state.audioName);

	return (
		<div className="controls flex-items">
			<div className="div-display" id="display">
				{audioName}
			</div>
			<div className="div-display">
				<h3>Volume: {Math.round(vol * 100)}</h3>
				<hr />
				<input
					type="range"
					name="volume"
					id="volume"
					step="0.01"
					min="0"
					max="1"
					value={vol}
					onChange={(e) => {
						dispatch(volControl(e.target.value));
					}}
				/>
			</div>
		</div>
	);
};

export default Display;
