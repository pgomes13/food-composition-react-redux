import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import cardAvatarStyle from "assets/jss/material-dashboard-react/components/cardAvatarStyle.jsx";

const CardAvatar = ({ classes, children, className, plain, profile, ...rest }) => {

	const cardAvatarClasses = classNames({
		[classes.cardAvatar]: true,
		[classes.cardAvatarProfile]: profile,
		[classes.cardAvatarPlain]: plain,
		[className]: className !== undefined
	});

	return (
		<div className={cardAvatarClasses} {...rest}>
			{children}
		</div>
	);
};

CardAvatar.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	profile: PropTypes.bool,
	plain: PropTypes.bool
};

export default withStyles(cardAvatarStyle)(CardAvatar);
