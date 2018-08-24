import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { typographyStyle } from "../../assets/jss/material-dashboard-react/components";

const _Danger = ({ classes, children }) => {

  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </div>
  );
};

_Danger.propTypes = {
  classes: PropTypes.object.isRequired
};

const Danger = withStyles(typographyStyle)(_Danger);

export { Danger };
