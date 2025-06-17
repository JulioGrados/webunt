import styled from 'styled-components';

const FlaskContainer = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlaskBox = styled.div`
  width: 7px;
  height: 7px;
`

const FlaskIcon = ({color = 'red', process = 'Testing'}) => (
  <FlaskContainer>
    {
      process === 'Testing' ? (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Matraz con cuello corto */}
          <path
            d="M28 10 H36 V20 C36 22 37 24 39 26 C44 31 44 48 32 48 C20 48 20 31 25 26 C27 24 28 22 28 20 Z"
            fill="white"
            stroke="#444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* ClipPath para líquido interno */}
          <defs>
            <clipPath id="flaskClip">
              <path d="M28 10 H36 V20 C36 22 37 24 39 26 C44 31 44 48 32 48 C20 48 20 31 25 26 C27 24 28 22 28 20 Z" />
            </clipPath>
          </defs>

          {/* Líquido naranja animado */}
          <g clipPath="url(#flaskClip)">
            <path fill="#FFA500">
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="
                  M22,36 
                  Q27,34 32,36 
                  Q37,38 42,36 
                  L42,48 
                  L22,48 
                  Z;

                  M22,37 
                  Q27,39 32,37 
                  Q37,35 42,37 
                  L42,48 
                  L22,48 
                  Z;

                  M22,36 
                  Q27,34 32,36 
                  Q37,38 42,36 
                  L42,48 
                  L22,48 
                  Z
                "
              />
            </path>
          </g>
        </svg>
      ) : (
        process === 'Validated' ? (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Matraz con cuello corto */}
            <path
              d="M28 10 H36 V20 C36 22 37 24 39 26 C44 31 44 48 32 48 C20 48 20 31 25 26 C27 24 28 22 28 20 Z"
              fill="white"
              stroke="#444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* ClipPath para líquido interno */}
            <defs>
              <clipPath id="flaskClip">
                <path d="M28 10 H36 V20 C36 22 37 24 39 26 C44 31 44 48 32 48 C20 48 20 31 25 26 C27 24 28 22 28 20 Z" />
              </clipPath>
            </defs>

            {/* Líquido rojo casi llenando el matraz */}
            <g clipPath="url(#flaskClip)">
              <path
                fill="#FF3B3B"
                d="M22,30 
                  Q27,28 32,30 
                  Q37,32 42,30 
                  L42,48 
                  L22,48 
                  Z"
              />
            </g>
          </svg>
        ) : (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Matraz con cuello corto */}
            <path
              d="M28 10 H36 V20 C36 22 37 24 39 26 C44 31 44 48 32 48 C20 48 20 31 25 26 C27 24 28 22 28 20 Z"
              fill="white"
              stroke="#444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* ClipPath para el contenido interno */}
            <defs>
              <clipPath id="flaskClip">
                <path d="M28 10 H36 V20 C36 22 37 24 39 26 C44 31 44 48 32 48 C20 48 20 31 25 26 C27 24 28 22 28 20 Z" />
              </clipPath>
            </defs>

            {/* Líquido gris sin animación */}
            <g clipPath="url(#flaskClip)">
              <path
                d="
                  M22,36
                  Q27,34 32,36
                  Q37,38 42,36
                  L42,48
                  L22,48
                  Z
                "
                fill="#888"
              />
            </g>

            {/* X tachado */}
            <line x1="20" y1="20" x2="44" y2="44" stroke="#d00" strokeWidth="3" strokeLinecap="round" />
            <line x1="44" y1="20" x2="20" y2="44" stroke="#d00" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )
      )
    }
    <FlaskBox style={{backgroundColor: color}} />
  </FlaskContainer>
);

export default FlaskIcon;
