import React from "react";
import {connect} from "react-redux";
import {deleteNotification} from "../redux/actions/notifications";
import Alert from "../components/Alert";

const NotificationsContainer = ({notifications, deleteNotification}) => {
    return (
        <React.Fragment>
            {notifications.map(notification => (
                <Alert {...notification} key={notification.id} onClick={() => { deleteNotification(notification.id); }}/>
            ))}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    const {notifications} = state;

    return {
        notifications
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteNotification: (id) => dispatch(deleteNotification(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
