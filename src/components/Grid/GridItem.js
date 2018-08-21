import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    padding: "0 15px !important"
  }
};

const _GridItem = ({ classes, children, ...rest }) => {

  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}



const GridItem = withStyles(style)(_GridItem);
export { GridItem };
