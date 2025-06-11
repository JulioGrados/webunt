import styled from 'styled-components';

const FlaskContainer = styled.div`
  width: 42px;
  height: 42px;
`;

const FlaskIcon = () => (
  <FlaskContainer>
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

      <defs>
        <clipPath id="flaskClip">
          <path d="M28 10 H36 V20 C36 22 37 24 39 26 C44 31 44 48 32 48 C20 48 20 31 25 26 C27 24 28 22 28 20 Z" />
        </clipPath>
      </defs>

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
  </FlaskContainer>
);

export default FlaskIcon;
