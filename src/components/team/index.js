import { TeamImg, TeamName, TeamRol, TeamStyled } from "./styles"

export const Team = ({img, name, rol}) => {
    return (
        <TeamStyled>
            <TeamImg src={`http://localhost:8001${img}`} alt={'tem'}/>
            <TeamName>{name}</TeamName>
            <TeamRol>{rol}</TeamRol>
        </TeamStyled>
    )
}