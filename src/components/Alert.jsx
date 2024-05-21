import { Button } from "react-bootstrap";
import "../styles/main.css";

export default function AlertComponent({ visible, message, onClose, alertColor }) {
    return (
        <>
            {visible && (
                <div className={`banner-alert ${alertColor}`}>
                    {message}
                    <Button className="section-btn-sm" onClick={onClose} style={{ marginLeft: "20px" }}>X</Button>
                </div>
            )}
        </>
    );
}