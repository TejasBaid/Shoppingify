import React from 'react'
import './homepage.scss'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Center } from '../../components/centre/Center'

export const Homepage = () => {
    return (
        <div className='homepage'>
            <Sidebar />
            <Center />
        </div>
    )
}
