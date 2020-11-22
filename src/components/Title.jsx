import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        padding: "16px 0"
    },
}));

const Title = ({title, variant}) => {
    const classes = useStyles();

    return (
        <Typography variant={variant || "h6"} className={classes.title}>
            {title}
        </Typography>
    )
};

export default Title;
