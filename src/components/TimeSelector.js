import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import icNext from 'assets/ic-next.svg'
import { texts } from 'styles'
import { DataContext } from 'stores'

const styles = {
    container: styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    `,
    arrow: styled.img`
        width: 20px;
        height: 20px;
        object-fit: contain;
        cursor: pointer;

        ${props => props.inverted && css`
            transform: rotate(180deg);
        `}
    `
}

export default function TimeSelector() {
    const { state, actions } = useContext(DataContext)

    return (
        <styles.container>
            <styles.arrow src={icNext} alt="" inverted onClick={() => actions.changeTimeOffset(false)} />            
            <texts.label>{state.timeOffset.label}</texts.label>
            <styles.arrow src={icNext} alt="" onClick={() => actions.changeTimeOffset()} />            
        </styles.container>
    )
}