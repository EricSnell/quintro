import $          from "jquery";
import Promise    from "bluebird";


function prepareGame(game) {
	game.currentPlayerColor = game.current_player_color;
	delete game.current_player_color;

	if (game.player_limit) {
		game.playerLimit = game.player_limit;
		delete game.player_limit;
	}

	game.isStarted = game.is_started;
	delete game.is_started;

	return game;
}

// TODO: factor out of individual utils
function getErrorMessageFromXHR(jqXHR) {
	return jqXHR.responseJSON &&
	jqXHR.responseJSON.error &&
	jqXHR.responseJSON.error.message ?
		jqXHR.responseJSON.error.message :
		jqXHR.responseText;
}

function searchGames({ numberOfPlayers, onlyOpenGames, includeUserGames }) {
	return Promise.resolve(
		$.ajax({
			url: `/api/games`,
			type: "GET",
			dataType: "json",
			data: {
				numberOfPlayers,
				onlyOpenGames,
				includeUserGames
			}
		}).catch(
			jqXHR => {
				throw new Error(getErrorMessageFromXHR(jqXHR));
			}
		).then(results => results.map(prepareGame))
	);
}

class GameUtils {
	static getGame({ gameName }) {
		return Promise.resolve(
			$.ajax({
				url: `/api/games/${gameName}`,
				type: "GET",
				dataType: "json"
			}).catch(
				jqXHR => {
					throw new Error(getErrorMessageFromXHR(jqXHR));
				}
			).then(prepareGame)
		);
	}

	static createGame({ name, width, height, playerLimit }) {
		return Promise.resolve(
			$.ajax({
				url: `/api/games/${name}`,
				type: "POST",
				dataType: "json",
				data: {
					width,
					height,
					playerLimit
				}
			}).catch(
				jqXHR => {
					throw new Error(getErrorMessageFromXHR(jqXHR));
				}
			).then(prepareGame)
		);
	}

	static findOpenGames({ numberOfPlayers }) {
		return searchGames({ numberOfPlayers, onlyOpenGames: true });
	}

	static getUserGames() {
		return searchGames({ includeUserGames: true });
	}
}

export default GameUtils;
