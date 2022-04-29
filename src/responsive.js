import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    } ;
  `;
};

export const iphone = (props) => {
  return css`
    @media only screen and (max-width: 680px) {
      ${props}
    } ;
  `;
};
