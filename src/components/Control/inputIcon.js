import React from 'react'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import useStyles from './styleControl'

export default function InputIcon(props) {
    const classes = useStyles()
    const { name, label, value, error=null, onChange, type, helperText, required=false, onClick, onMouseDown, icon, widthLabel= 100 } = props

    return (
        <FormControl 
            className={classes.input} 
            {...(required && {required:true})} 
            {...(error && {error:true})} 
            variant="outlined">
          <InputLabel>{label}</InputLabel>
          <OutlinedInput
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                //   aria-label="toggle password visibility"
                  onClick={onClick}
                  onMouseDown={onMouseDown}
                  edge="end"
                >
                  {icon ? <Visibility style={{ color: '#777' }} /> : <VisibilityOff style={{ color: '#777' }} />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={widthLabel}
          />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    )
}