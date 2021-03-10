import React from 'react';

import { StyledButton } from './styles'

const Button = ({ 
  action, 
  secondary = false,
  children = 'Teste', 
  type = 'submit', 
}) => (
  <StyledButton 
    type={type} 
    action={action} 
    secondary={secondary}
    >
      {children}
    </StyledButton>
  )

export default Button