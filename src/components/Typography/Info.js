import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import { typographyStyle } from "../../assets/jss/material-dashboard-react/components";

const _Info = ({ classes, children }) => {

  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
};

_Info.propTypes = {
  classes: PropTypes.object.isRequired
};

const Info = withStyles(typographyStyle)(_Info);

export { Info };
