export default {
	"quintro.general.actions.logIn": "Log in",
	"quintro.general.actions.logOut": "Log out",
	"quintro.general.form.isRequired": "This field is required",
	"quintro.components.TopNavigation.links.home": "Home",
	"quintro.components.TopNavigation.links.findGame": "Find a Game",
	"quintro.components.TopNavigation.links.howToPlay": "How to Play",
	"quintro.components.TopNavigation.links.startGame": "Start a Game",
	"quintro.components.AccountDialog.actions.logInWith": "Log in with {provider}",
	"quintro.components.GameJoinDialog.buttons.watchGame.label": "I want to watch this game",
	"quintro.components.GameJoinDialog.buttons.join.label": "Join",
	"quintro.components.GameJoinDialog.buttons.cancel.label": "Cancel",
	"quintro.components.GameJoinDialog.color": "Color",
	"quintro.components.GameJoinDialog.joinThisGamePrompt": "Join this game",
	"quintro.components.GameJoinDialog.cannotJoinReasons.gameIsFull": "Sorry, this game is full",
	"quintro.components.GameJoinDialog.cannotJoinReasons.gameIsInProgress": "Sorry, this game is already in progress",
	"quintro.components.CreateGame.header": "Create a Game",
	"quintro.components.CreateGame.form.dimensions.label": "Dimensions",
	"quintro.components.CreateGame.form.name.label": "Name",
	"quintro.components.CreateGame.form.width.label": "Width",
	"quintro.components.CreateGame.form.height.label": "Height",
	"quintro.components.CreateGame.form.playerLimit.label": "Number of players",
	"quintro.components.CreateGame.form.submitButton.label": "Create",
	"quintro.components.CreateGame.form.errors.nameInUse": "That name is already in use. Please use another name.",
	"quintro.components.CreateGame.form.errors.dimensions.invalid": "{value} is not a valid value for the {dimension}",
	"quintro.components.CreateGame.form.errors.dimensions.tooSmall": "{value} is less than the minimum {dimension} ({min})",
	"quintro.components.CreateGame.form.errors.dimensions.tooLarge": "{value} is greater than the maximum {dimension} of ({max})",
	"quintro.components.CreateGame.form.errors.playerLimit.invalid": "{value} is not a valid value for the player limit",
	"quintro.components.CreateGame.form.errors.playerLimit.tooSmall": "{value} is less than the minimum number of players ({min})",
	"quintro.components.CreateGame.form.errors.playerLimit.tooLarge": "{value} is greater than the maximum number of players ({max})",
	"quintro.components.PlayGame.watchers.summary.withYou": `You {watcherCount, plural,
		=0 {}
		one {and 1 other person}
		other {and {watcherCount} other people}
	} are watching this game.`,
	"quintro.components.PlayGame.watchers.summary.withoutYou": `{watcherCount, plural,
		one {1 person is}
		other {{watcherCount} people are}
	} watching this game.`,
	"quintro.components.PlayGame.loadingErrorMessage": "Error loading the game",
	"quintro.components.PlayerIndicators.indicatorMessages.you": "This is you",
	"quintro.components.PlayerIndicators.indicatorMessages.namedPlayer.present": "{playerName}",
	"quintro.components.PlayerIndicators.indicatorMessages.namedPlayer.absent": "{playerName} is absent",
	"quintro.components.PlayerIndicators.indicatorMessages.anonymousPlayer.present": "Player {playerColor}",
	"quintro.components.PlayerIndicators.indicatorMessages.anonymousPlayer.absent": "Player {playerColor} is absent",
	"quintro.components.PlayerIndicators.indicatorMessages.availableSlot": "This spot is open for another player",
	"quintro.components.FindGame.header": "Find a Game",
	"quintro.components.FindGame.searchingText": "Searching for open games, please wait",
	"quintro.components.FindGame.cancelSearchLabel": "Stop searching",
	"quintro.components.FindGame.form.playerLimit.label": "Number of players",
	"quintro.components.FindGame.form.playerLimit.details": "Leave blank if you don't care how many players the game has",
	"quintro.components.FindGame.form.submitButton.label": "Find",
	"quintro.components.UserGamesList.title": "My Games",
	"quintro.components.UserGamesList.badge.tooltip": `Game has {playerCount} {playerCount, plural,
		one {player}
		other {players}
	}`,
	"quintro.components.UserGamesList.tabs.inProgress": "In Progress",
	"quintro.components.UserGamesList.tabs.finished": "Finished Games",
	"quintro.components.UserGamesList.list.item.notStarted": "Game has not started yet",
	"quintro.components.UserGamesList.list.item.waitingForYou": "It's your turn!",
	"quintro.components.PlayerInfoPopup.displayNameInput.label": "My name",
	"quintro.components.PlayerInfoPopup.displayNameInput.submitButtonTitle": "Change",
	"quintro.components.PlayerInfoPopup.displayNameInput.cancelButtonTitle": "Cancel",
	"quintro.components.PlayerInfoPopup.profileLink": "Profile",
	"quintro.components.PlayerInfoPopup.showFormButtonTitle": "Change display name",
	"quintro.components.PlayerInfoPopup.anonymousUserTitle": "Anonymous User",
};
