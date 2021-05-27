import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import icClose from 'assets/ic-close.svg'

const styles = {
    container: styled.div`
        position: relative;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin: 30px 0;
    `,
    closeBtn: styled.div`
        margin-right: 10px;
        height: 25px;
        width: 25px;
        background-image: url(${icClose});
        background-position: center;
        background-size: contain;
    `
}

export default function HeaderClose(props) {
    const { to } = props

    return (
        <styles.container>
            <Link to={to ? to : '/'}>
                <styles.closeBtn></styles.closeBtn>
            </Link>
        </styles.container>
    )
}