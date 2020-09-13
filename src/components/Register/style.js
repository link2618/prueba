import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caja: {
        marginTop: '10px',
        backgroundColor: '#0DADA3',
        width: '50%',
        // alignSelf: 'center'
    },
    titulo: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    },
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1)
        },
        marginTop: '20px'
    },
    input: {
        '& label.Mui-focused': {
            color: '#FFF',
        },
        '& label': {
            color: '#FFF',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
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
    boton: {
        margin: 'auto',
        marginBottom: '20px',
        backgroundColor: '#FFF',
        textColor: '#FFF',
        fontWeight: 'bold'
    }
}));

export default useStyles