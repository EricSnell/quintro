import Backbone           from "backbone";
import _                  from "lodash";
import $                  from "jquery";
import GameApp            from "../apps/game";
import PlayerItemTemplate from "../../templates/partials/player-turn-item.hbs";

class TurnIndicatorView extends Backbone.View {
	initialize(options) {
		var view = this;

		view._getGamePromise = GameApp.getCurrentGame().then(
			function(game) {
				view.model = game;
			}
		);
	}

	render() {
		var view = this;

		view._getGamePromise.done(
			function() {
				view._attachEventListeners();

				view._setActiveColor();
			}
		);

		return view;
	}

	_setActiveColor() {
		var view = this;

		view.$el.find('.player').removeClass('active')
			.filter('.' + view.model.get('current_player').color)
			.addClass('active');
	}

	_getPlayerEl(player) {
		var view = this;

		return $('<div></div>').addClass('player ' + player)
			.attr('data-player', player);
	}

	_attachEventListeners() {
		var view = this;

		view.listenTo(view.model, 'player-added', function(data) {
			view._addPlayer(data.addedModel.get('color'), data.addedModel.get('user'), data.index);

			view._setActiveColor();
		});

		view.listenTo(view.model, 'change:current_player', function() {
			view._setActiveColor();
		});
	}

	_addPlayer(color, user, order) {
		var view = this;

		if (view.$('.player.' + color).length > 0) {
			return;
		}

		var $playerElAtIndex = view.$('.player').eq(order);
		// var $playerItem = $('<li></li>').addClass('player ' + color);
		var playerItemHTML = PlayerItemTemplate({
			color: color,
			user: user
		});

		if ($playerElAtIndex.length > 0 && !$playerElAtIndex.hasClass(color)) {
			$playerElAtIndex.before(playerItemHTML);
		}
		else {
			view.$('ul').append(playerItemHTML);
		}
	}
}

export default TurnIndicatorView;
