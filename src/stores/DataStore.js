import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

const DataContext = React.createContext('Data')
const DataConsummer = DataContext.Consumer

class DataProvider extends Component {
    constructor(props) {
        super(props)

        this.timeOffsets = [
            { label: '1 day', value: 86400 },
            { label: '1 week', value: 604800 },
            { label: '1 month', value: 2419200 },
            { label: '3 month', value: 7257600 },
            { label: '6 month', value: 14515200 },
            { label: '1 year', value: 29030400 },
            { label: 'All time', value: Date.now() },
        ]

        this.timeOffsetIndex = this.timeOffsets.length - 1

        this.state = {
            timeOffset: { label: 'All time', value: Date.now() },
            words: [
                {
                    id: 'd7cb95c7-e3a1-45fe-9555-18bd597dbf5b',
                    created: 1622125370346,
                    en: 'World',
                    fr: 'Monde',
                    notes: `Il s'agit ici d'une référence au développement !`,
                    rating: 0.0
                },
                {
                    id: 'cbadecd8-fbce-4c17-8330-68ce7a4f76dd',
                    created: 1622124700685,
                    en: 'Hello',
                    fr: 'Bonjour',
                    notes: '',
                    rating: 0.0
                }
            ]
        }

        this.actions = {
            addWord: this.addWord.bind(this),
            deleteWord: this.deleteWord.bind(this),
            editWord: this.editWord.bind(this),
            changeTimeOffset: this.changeTimeOffset.bind(this)
        }
    }

    changeTimeOffset(up = true) {
        if (up) {
            if (this.timeOffsetIndex + 1 > this.timeOffsets.length - 1) {
                this.timeOffsetIndex = 0
            } else {
                this.timeOffsetIndex += 1
            }
        } else {
            if (this.timeOffsetIndex - 1 < 0) {
                this.timeOffsetIndex = this.timeOffsets.length - 1
            } else {
                this.timeOffsetIndex -= 1
            }
        }

        this.setState({ timeOffset: this.timeOffsets[this.timeOffsetIndex] })
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