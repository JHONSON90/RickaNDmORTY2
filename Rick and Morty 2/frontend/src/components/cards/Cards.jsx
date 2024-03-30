import  Card from '../card/Card'

const Cards = ({ characters , onClose }) => {
  return (
        <>
            {characters.map(({ id, name, image, gender }) => {
                return <Card
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    gender={gender}
                    onClose={onClose}
                />
            })}
        </>
    )
}
export default Cards