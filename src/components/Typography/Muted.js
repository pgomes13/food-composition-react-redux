import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import typographyStyle from "assets/jss/material-dashboard-react/components/typographyStyle.jsx";

const _Muted = ({ classes, children }) => {

  return (
    <div className={classes.defaultFontStyle + " " + classes.mutedText}>
      {children}
    </div>
  );
};

_Muted.propTypes = {
  classes: PropTypes.object.isRequired
};

const Muted = withStyles(typographyStyle)(_Muted);

export { Muted };