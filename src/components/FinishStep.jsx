import React from "react";
import {connect} from "react-redux";
import {resetStep} from "../redux/actions/application";
import {Button} from "@material-ui/core";
import {CheckCircleOutline} from "@material-ui/icons";

const FinishStep = ({resetStep}) => {
    return (
        <React.Fragment>
            <p>
                <CheckCircleOutline style={{
                    verticalAlign: "middle",
                    color: "#1bd07b",
                    marginRight: "8px",
                    fontSize: "32px"
                }}/>
                All your tweets are deleted.
            </p>

            <Button
                variant="contained"
                color="primary"
                onClick={resetStep}>Continue</Button>
        </React.Fragment>
    );
}

// const mapStateToProps = state => {
//     const {activeStep} = state.application
//
//     return {
//         activeStep
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        resetStep: () => dispatch(resetStep())
    }
}

export default connect(null, mapDispatchToProps)(FinishStep);
