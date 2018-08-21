import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import typographyStyle from "assets/jss/material-dashboard-react/components/typographyStyle.jsx";

const _Success = ({ classes, children }) => {

  return (
    <div className={classes.defaultFontStyle + " " + classes.successText}>
      {children}
    </div>
  );
};

_Success.propTypes = {
  classes: PropTypes.object.isRequired
};

const Success = withStyles(typographyStyle)(_Success);

export { Success };
