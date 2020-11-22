import React from "react";
import {
    makeStyles,
    Container,
    Paper,
    Stepper,
    Step,
    StepLabel
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {setStep} from "../redux/actions/application";
import {connect} from "react-redux";
import FinishStep from "../components/FinishStep";
import ImportStep from "../components/ImportStep";
import ConfigurationStep from "../components/ConfigurationStep";

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: "24px"
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = [
    {
        label: "Import Data",
        component: <ImportStep/>,
        hiddenInStepper: false
    },
    {
        label: "Configuration",
        component: <ConfigurationStep/>,
        hiddenInStepper: false
    },
    {
        label: "Process",
        component: <div>Process</div>,
        hiddenInStepper: false
    },
    {
        label: "Finish",
        component: <FinishStep/>,
        hiddenInStepper: true
    }
];

const getStepContent = (step) => {
    if (!(step in steps)) {
        throw Error(` Unknown step ${step}`);
    }

    return steps[step].component;
}

const LocalStepper = ({activeStep, steps}) => {
    return (
        <Stepper activeStep={activeStep}>
            {steps.filter(step => !step.hiddenInStepper).map(({label}) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

const HomePage = ({activeStep, setActiveStep}) => {
    const classes = useStyles();
    const handleNext = () => {
        if (activeStep === steps.length) {
            return;
        }

        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        if (activeStep -1 < 0) {
            return;
        }

        setActiveStep(activeStep - 1);
    };

    return (
        <Container className={classes.root}>
            <LocalStepper activeStep={activeStep} steps={steps} className={classes.stepper}/>
            <main>
                <Paper className={classes.paper}>
                    {getStepContent(activeStep)}
                </Paper>
                <div className={classes.buttons}>
                    {activeStep > 0 && activeStep < steps.length - 1 && (
                        <Button
                            onClick={handleBack}
                            variant="contained"
                            className={classes.button}>
                            Back
                        </Button>
                    )}
                    {activeStep < (steps.length - 1) && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}>
                            Next
                        </Button>
                    )}
                </div>
            </main>
        </Container>
    );
}


const mapStateToProps = state => {
    const {activeStep} = state.application;

    return {
        activeStep
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveStep: (step) => dispatch(setStep(step))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
