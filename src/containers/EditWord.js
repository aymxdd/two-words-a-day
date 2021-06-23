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

export default function EditWord() {
    const { id } = useParams()
    const { state, actions } = useContext(DataContext)

    const word = state.words.filter(item => item.id === id)[0]

    return (
        <containers.main>
            <HeaderClose />

            <containers.content>
                {word.en.length ?
                    <styles.contentItem>
                        <texts.title>Anglais</texts.title>
                        <texts.input type="text" value={word.en} onChange={e => actions.editWord(id, e.target.value, 'en')}></texts.input>
                    </styles.contentItem>
                : null}
                {word.fr.length ?
                    <styles.contentItem>
                        <texts.title>Français</texts.title>
                        <texts.input type="text" value={word.fr} onChange={e => actions.editWord(id, e.target.value, 'fr')}></texts.input>
                    </styles.contentItem>
                : null}
                
                <styles.contentItem>
                    <texts.title>Notes</texts.title>
                    <texts.input type="text" value={word.notes} onChange={e => actions.editWord(id, e.target.value, 'notes')}></texts.input>
                </styles.contentItem>
                
            </containers.content>

            <Fab to={`/word/${id}`} type={'next'} />
        </containers.main>
    )
}