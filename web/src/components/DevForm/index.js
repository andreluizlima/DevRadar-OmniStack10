import React, {useState, useEffect} from 'react';

function DevForm( {onSubmit} ){
	const [github_user, setGitUser] = useState('');
	const [techs, setTechs] = useState('');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');

	useEffect(
		() => {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;

					setLongitude(longitude);
					setLatitude(latitude);
				},
				(err) => {
					console.log(err);
				},
				{
					timeout: 30000,
				}
			);
		}, []
	);

	async function handleSubmit(e){
		e.preventDefault();
		await onSubmit(
			{
				github_user,
				techs,
				latitude,
				longitude,
			}
		);

		setGitUser('');
		setTechs('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-block">
				<label htmlFor="github_user">Git Username</label>
				<input type="text" name="github_user" id="github_user"
					required value={github_user}
					onChange={e => setGitUser(e.target.value)} />
			</div>

			<div className="input-block">
				<label htmlFor="techs">Techs</label>
				<input type="text" name="techs" id="techs" required
					value={techs} onChange={e => setTechs(e.target.value)} />
			</div>

			<div className="input-group">

				<div className="input-block">
					<label htmlFor="latitude">Latitude</label>
					<input type="number" name="latitude" id="latitude" required
						value={latitude} onChange={e => setLatitude(e.target.value)} />
				</div>

				<div className="input-block">
					<label htmlFor="longitude">Longitude</label>
					<input type="number" name="longitude" id="longitude" required
						value={longitude} onChange={e => setLongitude(e.target.value)} />
				</div>

			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

export default DevForm;