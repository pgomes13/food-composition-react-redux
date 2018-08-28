import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import withStyles from "@material-ui/core/styles/withStyles";

import { Header, Footer, Sidebar }  from "../../components";
import { dashboardRoutes } from "../../routes/dashboard";
import { appStyle as dashboardStyle } from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle";
import image from "../../assets/img/sidebar-2.jpg";
import logo from "../../assets/img/reactlogo.png";
import { searchProductsAction } from '../../actions';
import { USDA_API_KEY, BASE_URL, SEARCH_API } from '../../api';

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
    constructor(props) {
        super(props);
        this.searchQuery = this.getQueryObject();
        this.handleSearchProducts(this.searchQuery);
    }
    getQueryObject = () => ({
        base_url: BASE_URL,
        type: SEARCH_API,
        q: 'butter',
        api_key: USDA_API_KEY
    });
    handleSearchProducts = query => {
        this.props.searchProducts(query);
    };
    getRoute() {
        return this.props.location.pathname !== "/maps";
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            const ps = new PerfectScrollbar(this.refs.mainPanel);
        }
    }
    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({ mobileOpen: false });
            }
        }
    }
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
                    {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
                    {this.getRoute() ? (
                        <div className={classes.content}>
                            <div className={classes.container}>{switchRoutes}</div>
                        </div>
                    ) : (
                        <div className={classes.map}>{switchRoutes}</div>
                    )}
                    {this.getRoute() ? <Footer /> : null}
                </div>
            </div>
        );
    }
}

_Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    searchProducts: PropTypes.func.isRequired
};

const __Dashboard = withStyles(dashboardStyle)(_Dashboard);

const mapStateToProps = ({ products }) => ({
    products: products
});

const mapDispatchToProps  = dispatch => ({
    searchProducts: payload => dispatch(searchProductsAction(payload))
});

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(__Dashboard);

export { Dashboard, __Dashboard };
