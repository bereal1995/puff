import styled from 'styled-components'
import {Topaz} from "../../lib/Styled";

export const ButtonTopaz = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
   border-radius: 6px;
   background: ${Topaz};
   color: #000;
   cursor: pointer;
   &:hover, &:active{
    opacity: .7;
   }
`;

export const DownloadButtonContainer = styled.div`
  span{
    display:block;
    color: #777;
    font-size: 14px;
    line-height: 1;
    margin-top: 10px;
  }
  img{
    margin-right: 8px;
  }
`;

