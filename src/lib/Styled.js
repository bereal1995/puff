import styled,{createGlobalStyle, css} from "styled-components";

export const pxToRem = (value) => value / 16 + 'rem';

const isIOS = () => true
const containerWith = isIOS() ? 375 : 360;

export const pxToVw = (value) => {
    return value * 100 / containerWith
}

export const setHtmlVw = () => pxToVw(16);

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: -apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;
  }
  img {
    max-width: 100%;
  }
  
  html {
    font-size: ${setHtmlVw()};
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const GreenYellow = '#cdee0a';

export const ColorBox = styled.div`
  background: ${props => {
    if (props.caster) {
        return Topaz
    } else if (props.play) {
        return `#ddb418;`
    } else {
        return `#7167ff;`
    }
  }};
`;

export const Topaz = '#14cac1';

export const ArrowCss = styled.span`
    content:"";
    display: inline-block;
    position: relative;
    top: -2px;
    width:10px;
    height:10px;
    margin-left: 10px;
    border-top:2px solid #fff;
    border-right:2px solid #fff;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
`;
