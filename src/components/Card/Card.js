import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import { cardStyle } from "../../assets/jss/material-dashboard-react/components";

const _Card = ({ classes, className, children, plain, profile, chart, ...rest }) => {
	
	const cardClasses = classNames({
		[classes.card]: true,
		[classes.cardPlain]: plain,
		[classes.cardProfile]: profile,
		[classes.cardChart]: chart,
		[className]: className !== undefined
	});

	return (
		<div className={cardClasses} {...rest}>
			{children}
		</div>
	);
};

_Card.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	plain: PropTypes.bool,
	profile: PropTypes.bool,
	chart: PropTypes.bool
};

const Card = withStyles(cardStyle)(_Card);

export { Card };

