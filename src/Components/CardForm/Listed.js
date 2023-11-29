import React from 'react'
import { List } from './List'

function Listed() {
    return (
        <ul>
            <List text={"Product discovery and building what matters"} />
            <List text={"Measuring to ensure updates are a success"} />
            <List text={"And mush more!"} />
        </ul>
    )
}

export default Listed
