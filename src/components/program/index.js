import { ArrowIcon } from "../icons/arrow"
import { CheckSmallIcon } from "../icons/checksmall"
import { ProgramArrowContent, ProgramArrowRectangle, ProgramArrowTriangle, ProgramButton, ProgramButtonText, ProgramContent, ProgramContentBody, ProgramContentFigure, ProgramContentFigureImg, ProgramContentFigureName, ProgramContentText, ProgramContentTextP, ProgramContentTitle, ProgramImg, ProgramStyled } from "./styles"

export const Program = ({name, description, img, margin}) => {
    return (
        <ProgramStyled margin={margin}>
            <ProgramContent>
                <ProgramContentFigure>
                    <ProgramContentFigureImg src={`/static/img/${img}`} alt='Program' />
                    <ProgramContentFigureName>
                        Incuba {name}
                    </ProgramContentFigureName>
                </ProgramContentFigure>
                <ProgramArrowContent>
                    <ProgramArrowRectangle />
                    {/* <ProgramArrowTriangle /> */}
                </ProgramArrowContent> 
                <ProgramContentBody>
                    <ProgramContentText>
                        <CheckSmallIcon />
                        <ProgramContentTextP>
                            {description}
                        </ProgramContentTextP>
                    </ProgramContentText>
                    <ProgramContentText>
                        <CheckSmallIcon />
                        <ProgramContentTextP>
                            {description}
                        </ProgramContentTextP>
                    </ProgramContentText>
                    <ProgramContentText>
                        <CheckSmallIcon />
                        <ProgramContentTextP>
                            {description}
                        </ProgramContentTextP>
                    </ProgramContentText>
                    <ProgramButton>
                        Leer más
                    </ProgramButton>
                </ProgramContentBody>   
            </ProgramContent>
        </ProgramStyled>
    )
}