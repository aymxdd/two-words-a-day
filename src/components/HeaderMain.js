import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'

const styles = {
    container: styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
    `,
    item: styled.div`
        padding: 20px;

        ${props => props.active && css`
            font-weight: bold;
            & a { color: blue; }
        `}
    `
}

export default function HeaderMain() {
    const { location } = useHistory()

    const routes = [
        { name: 'Liste', path: '/' },
        { name: 'Challenges', path: '/challenges' },
    ]

    return (
        <styles.container>
            {routes.map((item, index) => {
                return (
                    <styles.item key={index} active={location.pathname === item.path}>
                        <Link to={item.path}>{item.name}</Link>
                    </styles.item>
                )
            })}
        </styles.container>
    )
}