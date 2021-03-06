import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import { withStyles } from "@material-ui/core/styles";
import RootRef from "@material-ui/core/RootRef";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ClearAllIcon from "@material-ui/icons/ClearAll";

import ColorSwatch from "@app/components/ColorPicker/ColorSwatch";

const styles = {
	root: {
		display: "flex",
		flexDirection: "column",
	},

	listHeader: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},

	list: {
		overflow: "auto",
		flex: 1,
	},
};

class MoveList extends React.PureComponent {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		game: ImmutablePropTypes.map.isRequired,
		onSelectMove: PropTypes.func,
	}

	componentDidUpdate() {
		if (this.listRef.current) {
			this.listRef.current.scrollTop = this.listRef.current.scrollHeight;
		}
	}

	listRef = React.createRef()

	handleListItemClick = ({ index }) => {
		this.props.onSelectMove && this.props.onSelectMove({
			index,
		});
	}

	renderMovesList = () => {
		const filledCells = this.props.game && this.props.game.getIn(["board", "filledCells"]);

		return (
			<RootRef rootRef={this.listRef}>
				<List
					classes={{
						root: this.props.classes.list,
					}}
				>
					{
						filledCells && filledCells.map(
							(cell, index) => (
								<ListItem
									key={`${JSON.stringify(cell.get("position"))}`}
									onClick={() => this.handleListItemClick({ index })}
									button={index < filledCells.size - 1}
								>
									<ListItemIcon>
										<ColorSwatch
											color={cell.get("color")}
										/>
									</ListItemIcon>
									<ListItemText
										primary={cell.get("position").toArray().join(", ")}
									>
									</ListItemText>
								</ListItem>
							)
						)
					}
				</List>
			</RootRef>
		);
	}

	renderNoMoves = () => {
		return (
			<div>No moves made yet</div>
		);
	}

	render() {
		const hasMoves = !this.props.game.getIn(["board", "filledCells"]).isEmpty();

		return (
			<div
				className={this.props.classes.root}
			>
				<header
					className={this.props.classes.listHeader}
				>
					<h1>Moves</h1>
					{
						hasMoves && (
							<IconButton
								onClick={() => this.handleListItemClick({ index: null })}
								aria-label="Clear all moves"
								title="Clear all moves"
							>
								<ClearAllIcon />
							</IconButton>
						)
					}
				</header>
				{
					hasMoves ?
						this.renderMovesList() :
						this.renderNoMoves()
				}
			</div>
		);
	}
}

export default withStyles(styles)(MoveList);
