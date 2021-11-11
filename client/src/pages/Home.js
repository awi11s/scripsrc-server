import React from 'react'
import { Link } from 'react-router-dom'
import { BUTTON_STYLES, LINK_STYLES } from '../components/styles'
import ChapDisplay from '../components/ChapDisplay'

export const Home = () => {
    return (
        <>
            <button style={BUTTON_STYLES}><Link to='/register' style={LINK_STYLES}>sign up</Link></button>
            <ChapDisplay />
        </>
    )
}
