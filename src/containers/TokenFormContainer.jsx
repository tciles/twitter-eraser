import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {updateConfigurationForm} from "../redux/actions/application";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "16px",
        '& > *': {
            margin: theme.spacing(1, 0),
            width: '100%',
        },
    },
}));

const renderTextField = ({id, label, value, onChange}) => {
    return <TextField
        type="text"
        id={id}
        label={label}
        variant="outlined"
        value={value}
        onChange={(e) => {
            onChange(id, e.target.value)
        }}/>
}

const TokenFormContainer = (props) => {
    const classes = useStyles();
    const {
        handleSubmit,
        consumerKey,
        consumerSecret,
        accessTokenKey,
        accessTokenSecret
    } = props;

    const onChange = (id, value) => {
        handleSubmit({[id]: value})
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            {renderTextField({ id: "consumerKey", value: consumerKey, label: "Consumer Key", onChange })}
            {renderTextField({ id: "consumerSecret", value: consumerSecret, label: "Consumer Secret", onChange })}
            {renderTextField({ id: "accessTokenKey", value: accessTokenKey, label: "Access Token Key", onChange })}
            {renderTextField({ id: "accessTokenSecret", value: accessTokenSecret, label: "Access Token Secret", onChange })}
        </form>
    )
}

const mapStateToProps = state => {
    const {
        consumerKey,
        consumerSecret,
        accessTokenKey,
        accessTokenSecret
    } = state.application;

    return {
        consumerKey,
        consumerSecret,
        accessTokenKey,
        accessTokenSecret
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (values) => dispatch(updateConfigurationForm(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenFormContainer)
