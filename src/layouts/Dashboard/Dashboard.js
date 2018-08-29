import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import withStyles from "@material-ui/core/styles/withStyles";

import { Header, Sidebar }  from "../../components";
import { dashboardRoutes } from "../../routes/dashboard";
import { appStyle as dashboardStyle } from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle";
import image from "../../assets/img/sidebar-2.jpg";
import logo from "../../assets/img/reactlogo.png";

const switchRoutes = (
    <Switch>
        {dashboardRoutes.map((prop, key) => {
            if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
            return <Route path={prop.path} component={prop.component} key={key} />;
        })}
    </Switch>
);

class _Dashboard extends Component {

    render() {
        const { classes, ...rest } = this.props;

        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={dashboardRoutes}
                    logoText={"Food Composition"}
                    logo={logo}
                    image={image}
                    color="blue"
                    {...rest}
                />
                <div className={classes.mainPanel} ref="mainPanel">
                    <Header
                        routes={dashboardRoutes}
                        {...rest}
                    />
                    <div className={classes.content}>
                        <div className={classes.container}>{switchRoutes}</div>
                    </div>
                </div>
            </div>
        );
    }
}

_Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

const Dashboard = withStyles(dashboardStyle)(_Dashboard);

export { Dashboard, _Dashboard };
