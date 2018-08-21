import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import typographyStyle from "assets/jss/material-dashboard-react/components/typographyStyle.jsx";

const _Warning = ({ classes, children }) => {

  return (
    <div className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </div>
  );
};

_Warning.propTypes = {
  classes: PropTypes.object.isRequired
};

const Warning = withStyles(typographyStyle)(_Warning);

export { Warning };
