import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Config from "@app/config";

import ColorSwatch from "./ColorSwatch";

const styles = {
	root: {
		display: "inline-block",
	},
};
class ColorPicker extends React.PureComponent {
	static propTypes = {
		classes: PropTypes.object.isRequired,
		getDefaultColor: PropTypes.func,
		colorFilter: PropTypes.func,
		onColorChosen: PropTypes.func.isRequired,
		selectedColor: PropTypes.oneOf(Config.game.colors.map(({ id }) => id)),
	}

	static defaultProps = {
		getDefaultColor: () => Config.game.colors[0].id,
	}

	state = {
		colorDisplayEl: null,
		isColorPickerOpen: false,
	}

	handleCurrentColorClicked = (event) => {
		this.setState({
			colorDisplayEl: event.target,
			isColorPickerOpen: true,
		});
	}

	/**
	 * Handles a player color being clicked.
	 *
	 * @function
	 *
	 * @param {object} args - the function arguments
	 * @param {object} args.color - the color ID for the selected color
	 *
	 * @return {void}
	 */
	handleColorClicked = ({ color }) => {
		this.closeColorPicker();

		this.props.onColorChosen({ color });
	}

	/**
	 * Closes the player color dropdown.
	 *
	 * @function
	 *
	 * @return {void}
	 */
	closeColorPicker = () => {
		this.setState({ isColorPickerOpen: false });
	}

	/**
	 * Renders an option for the color picker dropdown.
	 *
	 * @function
	 *
	 * @param {object} colorDefinition - the color definition object for the color to render
	 * @param {object} [rootProps] - additional props to add to the wrapper element
	 *
	 * @return {external:React.Component} the picker item element to render
	 */
	renderColorOptionContent = (colorDefinition, rootProps) => {
		return (
			<span
				{...rootProps}
			>
				<ColorSwatch
					color={colorDefinition.id}
				/>
				{colorDefinition.name}
			</span>
		);
	}

	render() {
		const defaultColor = this.props.getDefaultColor();

		let colors = Config.game.colors;
		
		if (typeof this.props.colorFilter === "function") {
			colors = colors.filter(this.props.colorFilter);
		}

		return (
			<div
				className={this.props.classes.root}
			>
				<Button
					key="color-change-button"
					onClick={this.handleCurrentColorClicked}
				>
					{
						this.renderColorOptionContent(
							Config.game.colors.get(this.props.selectedColor || defaultColor),
						)
					}
				</Button>
				<Menu
					open={this.state.isColorPickerOpen}
					onClose={this.closeColorPicker}
					anchorEl={this.state.colorDisplayEl}
				>
					{
						colors.map(
							(colorDefinition) => {
								return (
									<MenuItem
										key={colorDefinition.id}
										data-color={colorDefinition.id}
										selected={colorDefinition.id === (this.state.selectedColor || defaultColor)}
										onClick={() => this.handleColorClicked({
											color: colorDefinition.id
										})}
									>
										{ this.renderColorOptionContent(colorDefinition) }
									</MenuItem>
								);
							}
						)
					}
				</Menu>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPicker);
