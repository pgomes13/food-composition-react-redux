import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import cardBodyStyle from "assets/jss/material-dashboard-react/components/cardBodyStyle.jsx";

const _CardBody = ({ classes, className, children, plain, profile, ...rest }) => {

	const cardBodyClasses = classNames({
		[classes.cardBody]: true,
		[classes.cardBodyPlain]: plain,
		[classes.cardBodyProfile]: profile,
		[className]: className !== undefined
	});
	return (
		<div className={cardBodyClasses} {...rest}>
			{children}
		</div>
	);
};

_CardBody.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	plain: PropTypes.bool,
	profile: PropTypes.bool
};

const CardBody = withStyles(cardBodyStyle)(_CardBody);

export { CardBody };
