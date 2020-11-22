import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#1da1f2"
            }
        },
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: '#1bd07b',
                },
                '&$active': {
                    color: '#1da1f2',
                },
            },
        },
        MuiButton: {
            containedPrimary: {
                backgroundColor: "#1da1f2",
                "&:hover": {
                    backgroundColor: "#1a90d9",
                }
            },
        }
    },
});

export default theme;
