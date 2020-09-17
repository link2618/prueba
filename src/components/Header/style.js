import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#0DADA3'
    },
    derecha: {
        justifyContent: 'flex-end', 
        textDecoration: 'none',
        color: '#FFF',
    },
    link: {
        textDecoration: 'none',
        color: '#FFF',
    },
    user: {
        flexGrow: 1,
        textAlign: 'right' 
    },
    offset: theme.mixins.toolbar // Para colocar el alto del header de forma dinamica
  }));

  export default useStyles