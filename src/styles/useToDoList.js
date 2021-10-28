import { createStyles, makeStyles } from '@mui/styles'

const useList = makeStyles(() =>
    createStyles({
        center: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        nav: {
            backgroundColor: '#eee !IMPORTANT',
            width: '500px',
            margin: 'auto',
            marginTop: '20px',
            borderRadius: '10px',
            marginBottom: '30px',
        },
        bg: {
            marginTop: '20px',
            backgroundColor: '#258',
            padding: '40px',
            width: '600px',
            margin: 'auto',
            borderRadius: '20px'
        }
    })
)

export default useList
