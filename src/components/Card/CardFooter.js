import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import cardFooterStyle from "assets/jss/material-dashboard-react/components/cardFooterStyle.jsx";

const _CardFooter = ({ classes, className, children, plain, profile, stats, chart, ...rest }) => {
	
	const cardFooterClasses = classNames({
		[classes.cardFooter]: true,
		[classes.cardFooterPlain]: plain,
		[classes.cardFooterProfile]: profile,
		[classes.cardFooterStats]: stats,
		[classes.cardFooterChart]: chart,
		[className]: className !== undefined
	});
	return (
		<div className={cardFooterClasses} {...rest}>
			{children}
		</div>
	);
};

_CardFooter.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	plain: PropTypes.bool,
	profile: PropTypes.bool,
	stats: PropTypes.bool,
	chart: PropTypes.bool
};

const CardFooter = withStyles(cardFooterStyle)(_CardFooter);

export { CardFooter };
