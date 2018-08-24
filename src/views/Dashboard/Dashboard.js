import React from "react";
import PropTypes from "prop-types";
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

class _Dashboard extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
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
            </div>
        );
    }
}

_Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

const Dashboard = withStyles(dashboardStyle)(_Dashboard);

export { Dashboard };
