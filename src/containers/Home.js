import React from 'react'
import { List, HeaderMain, Fab } from 'components'
import { containers } from 'styles'

export default function Home() {
    return (
        <containers.main>
            <HeaderMain />
            <List />
            <Fab to={'/new-word'} type={'add'} />
        </containers.main>
    )
}