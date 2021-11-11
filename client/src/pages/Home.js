import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/styles'
import ChapDisplay from '../components/ChapDisplay'

export const Home = () => {
    return (
        <>
            <Button><Link to='/register'>sign up</Link></Button>
            <ChapDisplay />
        </>
    )
}
