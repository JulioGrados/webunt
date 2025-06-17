const FlaskFullIcon = () => (
  <svg width="37" height="37" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    {/* Contorno del matraz */}
    <path
      d="M28 10 H36 V20 C36 22 37 24 39 26 C44 31 44 48 32 48 C20 48 20 31 25 26 C27 24 28 22 28 20 Z"
      fill="white"
      stroke="#444"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Clip para animar dentro del matraz */}
    <defs>
      <clipPath id="flaskFullClip">
        <path d="M28 10 H36 V20 C36 22 37 24 39 26 C44 31 44 48 32 48 C20 48 20 31 25 26 C27 24 28 22 28 20 Z" />
      </clipPath>
    </defs>

    {/* Líquido naranja animado y más lleno */}
    <g clipPath="url(#flaskFullClip)">
      <path fill="#FFA500">
        <animate
          attributeName="d"
          dur="3s"
          repeatCount="indefinite"
          values="
            M22,28 Q27,26 32,28 Q37,30 42,28 L42,48 L22,48 Z;
            M22,29 Q27,31 32,29 Q37,27 42,29 L42,48 L22,48 Z;
            M22,28 Q27,26 32,28 Q37,30 42,28 L42,48 L22,48 Z
          "
        />
      </path>
    </g>
  </svg>
);

export default FlaskFullIcon;
