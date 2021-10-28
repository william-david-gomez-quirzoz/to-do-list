import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useState, useEffect } from 'react'

const EditList = ({ open, close, value, accept }) => {
    const [text, setText] = useState('')

    useEffect(() => {
        setText(value.value)
    }, [value])

    const onChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Dialog open={open} onClose={() => close()}>
            <DialogTitle>Edit</DialogTitle>

            <DialogContent>
                <TextField autoFocus label="Task" type="text" variant="standard" value={text} onChange={onChange} />
            </DialogContent>

            <DialogActions>
                <Button onClick={() => close()}>Cerrar</Button>

                <Button
                    onClick={() => {
                        close()
                        accept(text, value)
                    }}
                >
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditList
