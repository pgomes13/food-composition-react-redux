import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import { typographyStyle } from "../../assets/jss/material-dashboard-react/components";

const _Primary = ({ classes, children }) => {

  return (
    <div className={classes.defaultFontStyle + " " + classes.primaryText}>
      {children}
    </div>
  );
};

_Primary.propTypes = {
  classes: PropTypes.object.isRequired
};

const Primary = withStyles(typographyStyle)(_Primary);

export { Primary };
