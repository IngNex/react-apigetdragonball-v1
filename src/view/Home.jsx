import React from 'react'
import Card from '../components/Card'
import { Container } from '../styles/components/ContainerStyles'
import { ListView } from '../styles/components/ListStyles'

export default function Home() {
    return (
        <Container>
            <ListView>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ListView>
        </Container>
    )
}
