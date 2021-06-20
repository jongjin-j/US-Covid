import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as GoIcons from 'react-icons/go'
import * as FaIcons from 'react-icons/fa'
import * as VscIcons from 'react-icons/vsc'

export const NavbarElements = [
    {
        title: 'Single State',
        path: '/',
        icon: <RiIcons.RiVirusFill/>,
        className: 'nav-text'
    },
    {
        title: 'Compare States',
        path: '/compare',
        icon: <GoIcons.GoArrowBoth/>,
        className: 'nav-text'
    },
    {
        title: 'Aggregate',
        path: '/aggregate',
        icon: <FaIcons.FaFlagUsa/>,
        className: 'nav-text'
    },
    {
        title: 'Source',
        path: '/source',
        icon: <VscIcons.VscSourceControl/>,
        className: 'nav-text'
    }
]
