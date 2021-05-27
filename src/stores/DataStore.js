import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

const DataContext = React.createContext('Data')
const DataConsummer = DataContext.Consumer

class DataProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            words: [
                {
                    id: 'cbadecd8-fbce-4c17-8330-68ce7a4f76dd',
                    created: 1622113850432,
                    en: 'Hello',
                    fr: 'Bonjour',
                    notes: '',
                    rating: 0.0
                },
                {
                    id: 'd7cb95c7-e3a1-45fe-9555-18bd597dbf5b',
                    created: 1622113872852,
                    en: 'World',
                    fr: 'Monde',
                    notes: `Il s'agit ici d'une référence au développement !`,
                    rating: 0.0
                }
            ]
        }

        this.actions = {
            addWord: this.addWord.bind(this),
            deleteWord: this.deleteWord.bind(this),
            editWord: this.editWord.bind(this)
        }
    }

    addWord(wordEn, wordFr) {
        if (wordEn.length && wordFr.length) {
            const newWord = {
                id: uuid(),
                created: Date.now(),
                en: wordEn,
                fr: wordFr,
                notes: '',
                rating: 0.0
            }
    
            const newState = this.state.words
            newState.push(newWord)
            this.setState({ words: newState })
        }
    }

    deleteWord() {

    }

    editWord() {

    }

    render() {
        return (
            <DataContext.Provider value={{ state: this.state, actions: this.actions }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export {
    DataProvider,
    DataContext,
    DataConsummer
}