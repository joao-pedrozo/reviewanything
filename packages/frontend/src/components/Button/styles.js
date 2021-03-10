import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  height: 3.2rem;
  width: 26rem;
  font-size: 1.2rem;
  border-radius: 4px;
  font-weight: 700;
  ${({ secondary }) => css`
    background: ${secondary ? '#FFFFFF' : '#E74C3C'};
    color: ${secondary ? '#E74C3C' : '#FFFFFF'};
    border: ${secondary ? 'none' : '1px solid #DADADA'};
  `}
`