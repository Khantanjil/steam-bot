const SteamUser = require('steam-user');
const config = require('./config.json');
const client = new SteamUser ();

const logInOptions = {
	accountName: config.username,
	password: config.password,

};
client.logOn(logInOptions)

client.on ('loggedOn', () => {
	console.log('yes');
	client.setPersona(SteamUser.EPersonaState.Online);
	client.gamesPlayed(730);
});

