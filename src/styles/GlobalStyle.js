import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing:    border-box;
    -ms-box-sizing:     border-box;
    -o-box-sizing:      border-box;
    box-sizing:         border-box;
  }
  body {
    background-color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    color: #000000;
    line-height: 1.7;
    font-weight: 300;
    margin: 0;
    position: relative;
  }
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  /* montserrat-100italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 100;
    src: url('/static/fonts/montserrat-v14-latin-100italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'),
        url('/static/fonts/montserrat-v14-latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-100italic.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-100italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-100 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 100;
    src: url('/static/fonts/montserrat-v14-latin-100.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Thin'), local('Montserrat-Thin'),
        url('/static/fonts/montserrat-v14-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-100.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-100.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-200 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    src: url('/static/fonts/montserrat-v14-latin-200.eot'); /* IE9 Compat Modes */
    src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'),
        url('/static/fonts/montserrat-v14-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-200.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-200.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-200italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 200;
    src: url('/static/fonts/montserrat-v14-latin-200italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'),
        url('/static/fonts/montserrat-v14-latin-200italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-200italic.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-200italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-200italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-300italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 300;
    src: url('/static/fonts/montserrat-v14-latin-300italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'),
        url('/static/fonts/montserrat-v14-latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-300italic.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-300italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/montserrat-v14-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('/static/fonts/montserrat-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-300 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: url('/static/fonts/montserrat-v14-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Light'), local('Montserrat-Light'),
        url('/static/fonts/montserrat-v14-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-300.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-300.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    src: url('/static/fonts/montserrat-v14-latin-italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Italic'), local('Montserrat-Italic'),
        url('/static/fonts/montserrat-v14-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-italic.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-500 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: url('/static/fonts/montserrat-v14-latin-500.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
        url('/static/fonts/montserrat-v14-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-500.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-500.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-600 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: url('/static/fonts/montserrat-v14-latin-600.eot'); /* IE9 Compat Modes */
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
        url('/static/fonts/montserrat-v14-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-600.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-600.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-500italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 500;
    src: url('/static/fonts/montserrat-v14-latin-500italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'),
        url('/static/fonts/montserrat-v14-latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-500italic.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-500italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-600italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 600;
    src: url('/static/fonts/montserrat-v14-latin-600italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'),
        url('/static/fonts/montserrat-v14-latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-600italic.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-600italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('/static/fonts/montserrat-v14-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('/static/fonts/montserrat-v14-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-700.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-800 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: url('/static/fonts/montserrat-v14-latin-800.eot'); /* IE9 Compat Modes */
    src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
        url('/static/fonts/montserrat-v14-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-800.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-800.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-800italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 800;
    src: url('/static/fonts/montserrat-v14-latin-800italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'),
        url('/static/fonts/montserrat-v14-latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-800italic.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-800italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-700italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    src: url('/static/fonts/montserrat-v14-latin-700italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),
        url('/static/fonts/montserrat-v14-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-700italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-900 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: url('/static/fonts/montserrat-v14-latin-900.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Black'), local('Montserrat-Black'),
        url('/static/fonts/montserrat-v14-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-900.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-900.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-900italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 900;
    src: url('/static/fonts/montserrat-v14-latin-900italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'),
        url('/static/fonts/montserrat-v14-latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/montserrat-v14-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-900italic.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/montserrat-v14-latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/montserrat-v14-latin-900italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }

  /* .css-1uccc91-singleValue, .css-1wa3eu0-placeholder {
    color: #010101 !important;
    font-size: 14px !important;
    font-weight: 400 !important;
  }
  .css-g1d714-ValueContainer {
    padding: 2px 8px 2px 0px !important;
  }
  .css-1hwfws3 {
    padding: 2px 0px !important;    
  }

  .css-1uccc91-singleValue {
    color: #010101 !important;
    font-size: 15px !important;    
    font-weight: 400 !important;
  } */
`