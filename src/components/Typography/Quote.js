import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import typographyStyle from "assets/jss/material-dashboard-react/components/typographyStyle.jsx";

const _Quote = ({ classes, text, author }) => {

  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
};

_Quote.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.node,
  author: PropTypes.node
};

const Quote = withStyles(typographyStyle)(_Quote);

export { Quote };
