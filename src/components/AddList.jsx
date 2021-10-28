import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import { IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'
import useAdd from '../styles/useAdd'

const AddList = ({ addTask }) => {
    const classes = useAdd()

    const [text, setText] = useState('')

    const onChange = (e) => setText(e.target.value)

    return (
        <div className={classes.containerAdd}>
            <FormControl>
                <Input
                    className={classes.input}
                    placeholder="Add task"
                    value={text}
                    onChange={onChange}
                    id="input"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => {
                                    addTask(text)
                                    setText('')
                                }}
                            >
                                <Add />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    )
}

export default AddList
