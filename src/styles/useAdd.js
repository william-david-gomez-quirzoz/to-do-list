import { createStyles, makeStyles } from '@mui/styles'

const useAdd = makeStyles(() =>
    createStyles({
        containerAdd: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
            width: '100%'
        },
        input: {
            width: '500px',
            backgroundColor: '#eee',
            padding: '10px',
            borderRadius: '7px'
        },
    })
)

export default useAdd
