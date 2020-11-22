import React from "react"
import TokenFormContainer from "../TokenFormContainer";

const ConfigurationContainer = (props) => {
    return (
        <React.Fragment>
            <a href={"https://developer.twitter.com/en/apps"} target={"_blank"}>1. Create your application</a>

            <TokenFormContainer/>
        </React.Fragment>
    )
}

export default ConfigurationContainer;
