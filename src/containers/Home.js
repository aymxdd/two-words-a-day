import React from 'react'
import { List, HeaderMain, TimeSelector, Fab } from 'components'
import { containers } from 'styles'

export default function Home() {
    return (
        <containers.main>
            <HeaderMain />
            <TimeSelector />
            <List />
            <Fab to={'/new-word'} type={'add'} />
        </containers.main>
    )
}