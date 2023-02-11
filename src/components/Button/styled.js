import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'

const variants = {
  primary: css`
    color: var(--white);
    background: var(--brown);
  `,
  secondary: css`
    color: var(--brown);
    background: var(--white);
  `
}
export const StyledButton = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  width: 100%;
  padding: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: solid 2px var(--brown);
  border-radius: 10px;
  ${props => variants[props.variant]}
  `