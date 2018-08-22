import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import cardHeaderStyle from "assets/jss/material-dashboard-react/components/cardHeaderStyle.jsx";

const _CardHeader = ({ classes, className, children, color, plain, stats, icon, ...rest }) => {
	
	const cardHeaderClasses = classNames({
		[classes.cardHeader]: true,
		[classes[color + "CardHeader"]]: color,
		[classes.cardHeaderPlain]: plain,
		[classes.cardHeaderStats]: stats,
		[classes.cardHeaderIcon]: icon,
		[className]: className !== undefined
	});

	return (
		<div className={cardHeaderClasses} {...rest}>
			{children}
		</div>
	);
};

_CardHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		"warning",
		"success",
		"danger",
		"info",
		"primary",
		"rose"
		]),
	plain: PropTypes.bool,
	stats: PropTypes.bool,
	icon: PropTypes.bool
};

const CardHeader = withStyles(cardHeaderStyle)(_CardHeader);

export { CardHeader };