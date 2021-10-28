import { createStyles, makeStyles } from '@mui/styles'

const useList = makeStyles(() =>
    createStyles({
        containerList: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '500px',
            backgroundColor: '#eee',
            borderRadius: '15px',
        },
        items: {
            borderBottom: '1px solid #888',
        },
        task: {
            color: '#fff',
        },
        delete: {
            fontSize: '18px !IMPORTANT',
            fontWeight: 'bold',
            padding: '10px !IMPORTANT',
        },
    })
)

export default useList
