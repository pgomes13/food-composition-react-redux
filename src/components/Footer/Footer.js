import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle";

const _Footer = ({ classes }) => {

    return (
        <footer className={ classes.footer }>
            <div className={ classes.container }>
                <div className={ classes.left }>
                    <List className={ classes.list }>
                        <ListItem className={ classes.inlineBlock }>
                            <a href="#home" className={ classes.block }>
                                Home
                            </a>
                        </ListItem>
                        <ListItem className={ classes.inlineBlock }>
                            <a href="#company" className={ classes.block }>
                                Company
                            </a>
                        </ListItem>
                        <ListItem className={ classes.inlineBlock }>
                            <a href="#portfolio" className={ classes.block }>
                                Portfolio
                            </a>
                        </ListItem>
                        <ListItem className={ classes.inlineBlock }>
                            <a href="#blog" className={ classes.block }>
                                Blog
                            </a>
                        </ListItem>
                    </List>
                </div>
            </div>
        </footer>
    );
};

_Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

const Footer = withStyles(footerStyle)(_Footer);

export { Footer };
