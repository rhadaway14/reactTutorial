import React from 'react'
import { Container, Rec } from './styles/buttons';




export default function Button({ children, ...restProps }) {
    return <Container { ...restProps }>{ children }</Container>
};

Button.Rectangle = function ButtonsRectangle({ onClick, children, ...restProps }) {
    return <Rec {...restProps}>{ children}</Rec>
};