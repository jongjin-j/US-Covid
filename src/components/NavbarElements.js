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
        class: 'nav-text'
    },
    {
        title: 'Compare States',
        path: '/compare',
        icon: <GoIcons.GoArrowBoth/>,
        class: 'nav-text'
    },
    {
        title: 'Aggregate',
        path: '/aggregate',
        icon: <FaIcons.FaFlagUsa/>,
        class: 'nav-text'
    },
    {
        title: 'Source',
        path: '/source',
        icon: <VscIcons.VscSourceControl/>,
        class: 'nav-text'
    }
]
