import axios from "axios";
import iconNotification from "../../assets/img/notification-icon.svg";


import './style.css';
import { BASE_URL } from "../../utils/request";

type Props = {
    saleId: number;
}

function handleClick(id :number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(Response => {
            console.log("Sucesso");
        });
}

function NotificationButton( {saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={iconNotification} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;