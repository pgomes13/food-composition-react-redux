import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { toJS, List } from 'immutable';
import Search from "@material-ui/icons/Search";
import {
    GridItem,
    GridContainer,
    CustomTable as Table,
    Card,
    CardHeader,
    CardBody,
    CustomInput,
    RegularButton as Button
} from "../../components";

import { dashboardStyle } from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import { searchProductsAction } from '../../actions';
import { USDA_API_KEY, BASE_URL, SEARCH_API } from '../../api';

class _Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    /**
     * Gey the query object for the request
     * @return {Object} - the query object
     */
    getQueryObject = () => ({
        base_url: BASE_URL,
        type: SEARCH_API,
        q: this.state.searchText,
        api_key: USDA_API_KEY
    });

    /**
     *  Search the products
     */
    searchProducts = () => {
        const { searchProducts } = this.props;
        searchProducts(this.getQueryObject());
    }

    /**
     * Get the product results
     * @return {Array} - the searched products
     */
    getProductResults = () => {
        const { products } = this.props;

        return products.toJS().map((product, i) => {
            return [i, product.name, product.group, product.ndbno];
        });
    };


    render() {
        const { classes } = this.props;
        const products = this.getProductResults();

        return (
            <Fragment>
                <GridContainer>
                    <GridItem xs={12} sm={11}>
                        <CustomInput
                            formControlProps={{
                                className: classes.margin + " " + classes.search,
                                fullWidth: true
                            }}
                            inputProps={{
                                placeholder: "Search products",
                                inputProps: {
                                    "aria-label": "Search"
                                },
                                onChange: (event) => this.setState({ searchText: event.target.value })
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={1}>
                        <Button color="white" aria-label="edit" justIcon round onClick={this.searchProducts}>
                            <Search />
                        </Button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="warning">
                                <h4 className={classes.cardTitleWhite}>Food Search Results</h4>
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="warning"
                                    tableHead={["No.", "Name", "Group", "NDB No."]}
                                    tableData={this.getProductResults()}
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
    classes: PropTypes.object.isRequired,
    searchProducts: PropTypes.func.isRequired,
    products: PropTypes.array
};

/**
 * Extract the following data from the store
 * @param {Object} state - Redux store state.
 * @return {Object} - The state attributes to add to props.
 */
const mapStateToProps = state => ({
    products: state.getIn(['data', 'products', 'payload']) || List()
});

/**
 * Map dispatch function to component props
 * @param {Function} dispatch - store's dispatch function
 * @returns {Object} props that contain searchProducts function
 */
const mapDispatchToProps  = dispatch => ({
    searchProducts: payload => dispatch(searchProductsAction(payload))
});

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(withStyles(dashboardStyle)(_Dashboard));

export { Dashboard, _Dashboard };