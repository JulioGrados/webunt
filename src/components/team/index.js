import { Card, Photo, Info, Name, Rol } from "./styles"
import { MEDIA_PATH } from 'utils/files/path'
export const Team = ({img, name, rol, index}) => {
    return (
        <Card key={index}>
            <Photo src={`${MEDIA_PATH}${img}`} alt={'tem'} />
            <Info>
            <Name>{name}</Name>
            <Rol>{rol}</Rol>
            </Info>
        </Card>
    )
}