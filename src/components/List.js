import React from 'react'
import { DataConsummer } from 'stores'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import icNext from 'assets/ic-next.svg'

const styles = {
    container: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    item: styled.div`
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,0.25);
        padding: 10px 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
        cursor: pointer;
    `,
    itemContent: styled.div`
        display: flex;
        flex-direction: column;

        & > span {
            font-family: sans-serif;
            font-size: 16px;
            line-height: 20px;
        }
    `,
    itemArrow: styled.div`
        width: 10px;
        height: 10px;
        background-image: url(${icNext});
        background-position: center;
        background-size: contain;
    `
}

export default function List() {
    return (
        <DataConsummer>
            {({ state }) => (
                <React.Fragment>
                    {state.words.map(item => {
                        return (
                            <Link to={`/word/${item.id}`} key={`word_${item.id}`}>
                                <styles.item>

                                    <styles.itemContent>
                                        <span>{item.en}</span>
                                        <span>{item.fr}</span>
                                    </styles.itemContent>

                                    <styles.itemArrow></styles.itemArrow>

                                </styles.item>
                            </Link>
                        )
                    })}
                </React.Fragment>
            )}
        </DataConsummer>
    )
}