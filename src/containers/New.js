import React from 'react'
import { containers, texts } from 'styles'
import HeaderClose from 'components/HeaderClose'
// import { DataContext } from 'stores'

export default function New() {
    // const { state, actions } = useContext(DataContext)

    return (
        <containers.main>
            <HeaderClose />

            <containers.content>
                <texts.title>New word feature coming soon here !</texts.title>
            </containers.content>
        </containers.main>
    )
}