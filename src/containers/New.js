import React, { useContext } from 'react'
import { containers, texts } from 'styles'
import { DataContext } from 'stores'
import HeaderClose from 'components/HeaderClose'

export default function New() {
    const { state, actions } = useContext(DataContext)

    return (
        <containers.main>
            <HeaderClose />

            <containers.content>
                <texts.title>New word feature coming soon here !</texts.title>
            </containers.content>
        </containers.main>
    )
}