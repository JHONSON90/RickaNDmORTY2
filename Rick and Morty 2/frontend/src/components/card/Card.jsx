import { FaRegWindowClose } from "react-icons/fa";

const Card = ({ id, name, image, gender, onClose }) => {
    console.log(name);

    return (
        <>
            <FaRegWindowClose onClick={() => onClose(id)} />
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{gender}</p>
        </>
    )
}
export default Card