import styled, { css } from "styled-components";

export const Wrapper =  styled.div((props) => {
const { gap = 0 } = props;

return css`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  gap: ${gap}px;
`

})