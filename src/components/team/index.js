import { TeamImg, TeamName, TeamRol, TeamStyled } from "./styles"

export const Team = ({img, name, rol}) => {
    return (
        <TeamStyled>
            <TeamImg src={`/static/img/${img}`} alt={'tem'}/>
            <TeamName>{name}</TeamName>
            <TeamRol>{rol}</TeamRol>
        </TeamStyled>
    )
}