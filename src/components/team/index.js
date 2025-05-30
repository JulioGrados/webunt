import { Card, Photo, Info, Name, Rol } from "./styles"

export const Team = ({img, name, rol, index}) => {
    return (
        <Card key={index}>
            <Photo src={`http://localhost:8001${img}`} alt={'tem'} />
            <Info>
            <Name>{name}</Name>
            <Rol>{rol}</Rol>
            </Info>
        </Card>
    )
}