import React from 'react'
import { TextField } from '@material-ui/core'

import useStyles from './styleControl'

export default function Input(props) {
    const classes = useStyles()
    const { name, label, value, error=null, onChange, type="text", helperText, required=false } = props

    return (
        <TextField
            className={classes.input}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            {...(error && {error:true, helperText:helperText})}
            {...(required && {required:true})}
        />
    )
}