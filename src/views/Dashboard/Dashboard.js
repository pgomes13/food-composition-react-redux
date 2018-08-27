import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import {
    GridItem,
    GridContainer,
    CustomTable as Table,
    Card,
    CardHeader,
    CardBody
} from "../../components";

import { dashboardStyle } from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import { USDA_API_KEY, BASE_URL, SEARCH_API, searchProducts } from '../../api';
import { searchProductsAction } from '../../actions';

class _Dashboard extends Component {

    constructor() {
        super();

        this.props.dispatch(searchProductsAction(this.getQueryObject()));
    };

    getQueryObject = () => ({
        base_url: BASE_URL,
        type: SEARCH_API,
        q: 'butter',
        api_key: USDA_API_KEY
    });

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="warning">
                                <h4 className={classes.cardTitleWhite}>Food Search Results</h4>
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="warning"
                                    tableHead={["ID", "Name", "Salary", "Country"]}
                                    tableData={[
                                        ["1", "Dakota Rice", "$36,738", "Niger"],
                                        ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                                        ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                                        ["4", "Philip Chaney", "$38,735", "Korea, South"]
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </Fragment>
        );
    }
}

_Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

const Dashboard = withStyles(dashboardStyle)(_Dashboard);

export { Dashboard };
