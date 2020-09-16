import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1)
        }
    },
    input: {
        '& label.Mui-focused': {
            color: '#FFF',
        },
        '& label': {
            color: '#FFF',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FFF',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FFF',
            //   backgroundColor: '#FFF'
            },
            '&:hover fieldset': {
              borderColor: '#FFF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFF',
            },
        },
    },
    error: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FF0000',
            },
            '&:hover fieldset': {
              borderColor: '#FF0000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF0000',
            },
        },
    }
}));

export default useStyles