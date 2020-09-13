import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#0DADA3'
    },
    boton: {
        justifyContent: 'flex-end', 
    },
    offset: theme.mixins.toolbar // Para colocar el alto del header de forma dinamica
  }));

  export default useStyles