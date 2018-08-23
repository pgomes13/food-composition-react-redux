import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import { cardIconStyle } from "../../assets/jss/material-dashboard-react/components";

const _CardIcon = ({ classes, className, children, color, ...rest }) => {

	const cardIconClasses = classNames({
		[classes.cardIcon]: true,
		[classes[color + "CardHeader"]]: color,
		[className]: className !== undefined
	});

	return (
		<div className={cardIconClasses} {...rest}>
			{children}
		</div>
	);
};

_CardIcon.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	color: PropTypes.oneOf([
		"warning",
		"success",
		"danger",
		"info",
		"primary",
		"rose"
	])
};

const CardIcon =  withStyles(cardIconStyle)(_CardIcon);

export { CardIcon };
