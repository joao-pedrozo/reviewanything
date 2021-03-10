import React from 'react'
import { screen, render } from '@testing-library/react'
import { toHaveStyle } from '@testing-library/jest-dom'
import 'jest-styled-components'

import Button from '.'

describe('<Button />', () => {
  it('should render the default button', () => {
    const { container } = render(<Button>Entrar</Button>)
    expect(screen.getByRole('button', { name: /Entrar/i })).toHaveStyle({
      height: '3.2rem',
      width: '26rem',
      'font-size': '1.2rem',
      background: '#E74C3C',
      color: '#FFFFFF',
      'border-radius': '4px'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the secondary button version', () => {
    render(<Button secondary>Entrar</Button>)
    expect(screen.getByRole('button', { name: /Entrar/i })).toHaveStyle({
      height: '3.2rem',
      width: '26rem',
      'font-size': '1.2rem',
      color: '#E74C3C',
      background: '#FFFFFF',
      'border-radius': '4px'
    })
  })
})