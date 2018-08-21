import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  }
};

const _GridContainer = ({ classes, children, ...rest }) => {

  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

const GridContainer = withStyles(style)(_GridContainer);

export { GridContainer };
