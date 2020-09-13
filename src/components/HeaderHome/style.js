import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar, // Para colocar el alto del header de forma dinamica
    root: {
        display: 'flex',
        // flexDirection: 'column-reverse',
        // flexGrow: 1,
        backgroundColor: '#0DADA3',
    },
    link: {
        textDecoration: 'none',
        color: '#FFF',
        margin: "auto 10px"
    },
    user: {
        flex: 1,
        textDecoration: 'none',
        color: '#FFF',
    },
  }));

  export default useStyles