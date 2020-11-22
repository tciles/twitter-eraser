import React from "react";
import {
    CheckCircleOutlined,
    ErrorOutline,
    InfoOutlined,
    WarningOutlined
} from "@material-ui/icons";

const getIcon = (type) => {
    switch(type) {
        case "warning":
            return <WarningOutlined/>
        case "error":
            return <ErrorOutline/>
        case "success":
            return <CheckCircleOutlined/>
        default:
            return <InfoOutlined/>
    }
}

const getBackgroundColor = (type) => {
    switch(type) {
        case "warning":
            return "#ff9800";
        case "error":
            return "#f44336";
        case "success":
            return "#4caf50";
        default:
            return "#2196f3";
    }
}

const Alert = ({type, text, onClick}) => {
    const background = getBackgroundColor(type);
    const icon = getIcon(type);

    return (<div onClick={onClick} style={{
        display: "flex",
        alignItems: "center",
        minHeight: "32px",
        borderRadius: "4px",
        background,
        color: "#fff",
        padding: "8px",
        marginBottom: "8px",
        cursor: "pointer"
    }}>
        {icon}
        <span style={{marginLeft: "8px"}}>{text}</span>
    </div>);
}

export default Alert;
