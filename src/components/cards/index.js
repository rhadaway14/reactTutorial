import React from 'react'
import { Card, ACard, Title, Content, Desc } from './styles/cards';

export default function Cards({ children, ...restProps }) {
    return <Card {...restProps}>{children}</Card>
}

Cards.Title = function CardsTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Cards.Content = function CardsContent({ children, ...restProps}) {
    return <Content {...restProps}>{children}</Content>
}

Cards.Desc = function CardsDesc({ children, ...restProps}) {
    return <Desc {...restProps}>{children}</Desc>
}