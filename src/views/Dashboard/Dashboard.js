import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
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

class _Dashboard extends Component {

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
                                }
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={1}>
                        <Button color="white" aria-label="edit" justIcon round>
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