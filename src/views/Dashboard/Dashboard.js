import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { List } from 'immutable';
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
        this.searchQuery = this.getQueryObject();
    }

    getQueryObject = () => ({
        base_url: BASE_URL,
        type: SEARCH_API,
        q: this.props.searchText,
        api_key: USDA_API_KEY
    });

    handleSearchProducts = () => this.props.searchProducts(this.searchQuery);

    getProductResults = () => {
        const { products } = this.props;
        console.log('products - ', products);


        return products.map((product, i) => {
            return [ i, product.get('name'), product.get('group'), product.get('ndbno') ];
        });
    };

    render() {
        const { classes } = this.props;
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
                                value: this.props.searchText
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={1}>
                        <Button color="white" aria-label="edit" justIcon round onClick={this.handleSearchProducts}>
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
    searchText: PropTypes.string,
    searchProducts: PropTypes.func.isRequired,
    products: PropTypes.array
};

const mapStateToProps = state => ({
    products: state.data.products.get('payload') || []
});

const mapDispatchToProps  = dispatch => ({
    searchProducts: payload => dispatch(searchProductsAction(payload))
});

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(withStyles(dashboardStyle)(_Dashboard));

export { Dashboard, _Dashboard };