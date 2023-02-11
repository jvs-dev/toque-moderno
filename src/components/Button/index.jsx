import { StyledButton } from './styled'
export const Button = ({ to = '/', variant = 'primary', children }) => {
  return <StyledButton to={to} variant={variant}> { children }</StyledButton>
}