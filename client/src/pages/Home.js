import React from 'react'
import { Link } from 'react-router-dom'
import { BUTTON_STYLES, LINK_STYLES } from '../components/styles'
import ChapDisplay from '../components/ChapDisplay'
import { MainGraphic } from '../assets/MainGraphic'

export const Home = () => {
    return (
        <>
            <MainGraphic />
            <button style={BUTTON_STYLES}><Link to='/register' style={LINK_STYLES}>sign up</Link></button>
            <button style={BUTTON_STYLES}><Link to='/login' style={LINK_STYLES}>login</Link></button>
            <ChapDisplay />
        </>
    )
}
