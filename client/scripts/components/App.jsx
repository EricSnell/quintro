import React          from "react";
import PropTypes      from "prop-types";
import { withRouter } from "react-router";
import TopNavigation  from "project/scripts/components/TopNavigation";
import                     "bootstrap/dist/js/bootstrap.js";
import                     "project/styles/page-layout.less";

class App extends React.Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]),
		sidebar: PropTypes.element
	}

	static defaultProps = {
		children: []
	}

	render() {
		return (
			<section
				className="page-layout__main-container"
			>
				<header
					className="page-layout__main-header"
				>
					<TopNavigation
					/>
				</header>
				<div
					className="page-layout__main-content-container"
				>
					<article
						className="page-layout__main-content"
					>
						{this.props.children}
					</article>
					{
						this.props.sidebar && (
							<aside
								className="page-layout__left-panel"
							>{this.props.sidebar}</aside>
						)
					}
				</div>
			</section>
		);
	}
}

export default withRouter(App);
