import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    /* ------------------------------------- 
                   FORMULARIOS 
    ------------------------------------- */
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caja: {
        marginTop: '10px',
        backgroundColor: '#0DADA3',
        // width: '43%',
        // alignSelf: 'center'
    },
    titulo: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
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