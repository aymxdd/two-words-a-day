import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import icPlus from 'assets/ic-plus.svg'
import icEdit from 'assets/ic-edit.svg'

const styles = {
    fab: styled.div`
        position: absolute;
        bottom: 30px;
        right: 20px;
        width: 45px;
        height: 45px;
        background: red;
        border-radius: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);

        & > img {
            width: 15px;
            height: 15px;
        }

        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    `
}

export default function Fab(props) {
    const { to, type } = props

    return (
        <Link to={to}>
            <styles.fab>
                {type === 'add' ? <img src={icPlus} alt="" /> : null}
                {type === 'edit' ? <img src={icEdit} alt="" /> : null}
            </styles.fab>
        </Link>        
    )
}