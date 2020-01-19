const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringArray')

const { findConnections } = require('../websocket')
const { sendMessage } = require('../websocket')

//index, show, update, destroy, store

module.exports = {
	async index(request, response) {
		const devs = await Dev.find();
		return response.json(devs);
	},

	async store(request, response) {
		const { github_user, techs, latitude, longitude } = request.body;

		const apiResponse = await axios.get(`https://api.github.com/users/${github_user}`);

		let dev = await Dev.findOne({ github_user });

		if (!dev) {
			const { name = login, avatar_url, bio } = apiResponse.data;

			const techsArray = parseStringArray(techs);

			console.log(name, avatar_url, bio, github_user, techsArray);

			const location = {
				type: 'Point',
				coordinates: [longitude, latitude]
			};

			dev = await Dev.create({
				github_user,
				name,
				avatar_url,
				bio,
				techs: techsArray,
				location
			});

			//Filtrar conexões que estão no máximo 10km e com uma das techs
			const sendSocketMessageTo = findConnections(
				{ latitude, longitude},
				techsArray,
			);

			console.log(sendSocketMessageTo);
			sendMessage(sendSocketMessageTo, 'new-dev', dev);
		}
		return response.json(dev);
	},
	async update(request, response) {
		const { github_user } = request.params;
		const { bio, latitude, longitude, techs } = request.body;

		const apiResponse = await axios.get(`https://api.github.com/users/${github_user}`);
		const { avatar_url } = apiResponse.data;

		const techsArray = parseStringArray(techs);

		const location = {
			type: 'Point',
			coordinates: [longitude, latitude]
		};

		await Dev.updateOne({
			github_user,
			avatar_url,
			bio,
			techs: techsArray,
			location
		});

		const dev = await Dev.findOne({ github_user });

		return response.json(dev);
	},
	async destroy(request, response) {
		const { github_user } = request.params;

		const dev = await Dev.deleteOne({ github_user });

		return response.json(dev);
	}
}