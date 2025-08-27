import { Image } from "react-bootstrap";

export default function IconBox({ iconImg, iconName }) {
    return (
        <div className="icon-box">
            <Image className="icon" src={iconImg} />
            <p className="icon-name">{iconName}</p>
        </div>
    );
}
