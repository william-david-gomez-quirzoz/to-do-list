import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import { useState } from 'react'
import useList from '../styles/useList'
import EditList from './EditList'

const ListText = ({ taskList, deleteSelected, check, selectedTask, deleteAll, active, modifyText }) => {
    const [open, setOpen] = useState(false)

    const [value, setValue] = useState({})

    const classes = useList()

    const openDialog = (val = '') => {
        setValue(val)

        setOpen(true)
    }

    const closeDialog = () => {
        setOpen(false)
    }

    if (taskList.length === 0) {
        return <h1 className={classes.task}>No task</h1>
    }

    return (
        <List className={classes.containerList}>
            {
                taskList.map((val, ind) => (
                    <ListItem
                        className={classes.items}
                        key={ind}
                        secondaryAction={
                            <div>
                                <IconButton onClick={() => deleteSelected(val.id)}>
                                    <DeleteIcon />
                                </IconButton>

                                <IconButton edge="end" aria-label="comments" onClick={() => openDialog(val)}>
                                    <CreateIcon />
                                </IconButton>
                            </div>
                        }
                    >
                        <ListItemIcon>
                            <Checkbox edge="start" checked={check.indexOf(val.id) !== -1} onClick={() => selectedTask(val.id)} />
                        </ListItemIcon>

                        <ListItemText primary={val.value} />
                    </ListItem>
                ))
            }

            {
                active === 'list' ? 
                (
                    <div>
                        <IconButton className={classes.delete} onClick={() => deleteAll()}>
                            <DeleteIcon />
                            All delete
                        </IconButton>

                        <IconButton className={classes.delete} onClick={() => deleteSelected(check)}>
                            <DeleteIcon />
                            Completes delete
                        </IconButton>
                    </div>
                ) : 
                active === 'complete' ? 
                (
                    <IconButton className={classes.delete} onClick={() => deleteSelected(check)}>
                        <DeleteIcon />
                        Completes delete
                    </IconButton>
                ) : 
                (
                    <div></div>
                )
            }

            <EditList open={open} close={closeDialog} value={value} accept={modifyText} />
        </List>
    )
}

export default ListText
