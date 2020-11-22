import React from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import {AppBar, makeStyles, Toolbar, Link} from '@material-ui/core';

import HomePage from "../pages/HomePage";
import "./MainNavigation.css";
import {GitHub, Twitter} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        color: "#FFF",
        textDecoration: "none"
    },
    icon: {
        color: "#FFF",
        paddingLeft: "16px"
    }
}));

const GITHUB_URL = "https://github.com/tciles?from=tweet_eraser";

const MenuSpacer = () => <div style={{flexGrow: 1}}/>;

function MainNavigation(props) {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <NavLink to="/" exact={true} className={classes.title}>
                            <Twitter fontSize={"large"}/>
                        </NavLink>
                        <MenuSpacer/>
                        <Link href={GITHUB_URL} target="_blank" className={classes.icon}>
                            <GitHub/>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>

            <Switch>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default MainNavigation;
