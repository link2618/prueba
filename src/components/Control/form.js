import React from 'react'

import useStyles from './styleControl'

export function Form(props) {
    const classes = useStyles()
    const { children, ...other } = props

    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}