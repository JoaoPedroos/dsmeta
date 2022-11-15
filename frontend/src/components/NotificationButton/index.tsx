import iconNotification from "../../assets/img/notification-icon.svg";

import './style.css';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={iconNotification} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;