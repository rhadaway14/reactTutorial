import React from 'react'
import { Field } from './styles/inputs';

export default function Fields({ children, ...restProps }) {
    return <Field {...restProps}>{children}</Field>
}