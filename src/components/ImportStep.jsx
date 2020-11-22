import React from "react";
import {Button} from "@material-ui/core";
import Alert from "./Alert";
import {fileToJSON, handleImport} from "../services/ImportService";
import {addNotification, deleteNotification} from "../redux/actions/notifications";
import {connect} from "react-redux";
import CsvTable from "./CsvTable";
import {setRows} from "../redux/actions/application";
const ImportStep = ({setRows, notifications, addNotification, deleteNotification}) => {
    const onFileChange = (e) => {
        handleImport(e, (file) => {
            fileToJSON(file, setRows);
            addNotification("success", `Process file: ${file.name}`);
        }, (text, file) => {
            addNotification("error", text);
        });
    }

    return (
        <React.Fragment>
            {notifications.map(notification => (
                <Alert {...notification} key={notification.id} onClick={() => { deleteNotification(notification.id); }}/>
            ))}

            <Button variant="contained" component="label">
                Upload File (.csv)
                <input type="file" accept="text/csv" hidden onChange={onFileChange}/>
            </Button>

            <CsvTable/>
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    const {notifications} = state;

    return {
        notifications
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNotification: (type, text) => dispatch(addNotification(type, text)),
        deleteNotification: (id) => dispatch(deleteNotification(id)),
        setRows: (rows) => dispatch(setRows(rows))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportStep);
