import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, New, Challenges, NoMatch, Word, EditWord } from 'containers'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/challenges" component={Challenges} />
            <Route exact path="/new-word" component={New} />
            <Route exact path="/word/:id" component={Word} />
            <Route exact path="/word/:id/edit" component={EditWord} />
            <Route component={NoMatch} />
        </Switch>
    )
}