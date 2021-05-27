import React, { useContext } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import { containers, texts } from 'styles'
import { DataContext } from 'stores'
import { HeaderClose, Fab } from 'components'

const styles = {
    contentItem: styled.div`
        margin: 0 0 40px 0;
    `
}

export default function Word() {
    const { id } = useParams()
    const { state } = useContext(DataContext)

    const word = state.words.filter(item => item.id === id)[0]

    return (
        <containers.main>
            <HeaderClose />

            <containers.content>
                {word.en.length ?
                    <styles.contentItem>
                        <texts.title>Anglais</texts.title>
                        <texts.label>{word.en}</texts.label>
                    </styles.contentItem>
                : null}
                {word.fr.length ?
                    <styles.contentItem>
                        <texts.title>Français</texts.title>
                        <texts.label>{word.fr}</texts.label>
                    </styles.contentItem>
                : null}
                {word.notes.length ?
                    <styles.contentItem>
                        <texts.title>Notes</texts.title>
                        <texts.label>{word.notes}</texts.label>
                    </styles.contentItem>
                : null}
            </containers.content>

            <Fab to={`/edit/${id}`} type={'edit'} />
        </containers.main>
    )
}