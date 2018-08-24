import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";

import { CustomInput, RegularButton as Button } from "../";
import { headerLinksStyle }  from "../../assets/jss/material-dashboard-react/components/headerLinksStyle";

class _HeaderLinks extends React.Component {
    state = {
        open: false
    };
    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;
        return (
            <div>
                <div className={classes.searchWrapper}>
                    <CustomInput
                        formControlProps={{
                            className: classes.margin + " " + classes.search
                        }}
                        inputProps={{
                            placeholder: "Search",
                            inputProps: {
                                "aria-label": "Search"
                            }
                        }}
                    />
                    <Button color="white" aria-label="edit" justIcon round>
                        <Search/>
                    </Button>
                </div>
            </div>
        );
    }
}

const HeaderLinks = withStyles(headerLinksStyle)(_HeaderLinks);

export { HeaderLinks };
