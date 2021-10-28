import { useState } from 'react'
import Add from '../components/AddList'
import ListText from '../components/ListText'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import useToDoList from '../styles/useToDoList'

const ToDoList = () => {
    const classes = useToDoList()

    const [task, setTask] = useState([])

    const [navigation, setNavigation] = useState(0)

    const [check, setCheck] = useState([])

    const [completed, setCompleted] = useState([])

    const [active, setActive] = useState([])

    const [navigationValue, setNavigationValue] = useState(0)

    const selectedTask = (val) => {
        const currentIndex = check.indexOf(val)

        const newChecked = [...check]

        if (currentIndex === -1) {
            newChecked.push(val)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setCheck(newChecked)

        taskCompleted(newChecked)
    }

    const addTask = (val) => {
        if (val !== '') {
            const id = val + Math.random()

            val = {
                id: id,
                value: val.trim(),
            }

            setTask([...task, val])
        }
    }

    const modifyText = (text, value) => {
        const taskList = task.map((val) => {
            if (val.id === value.id) {
                return {
                    ...val,
                    value: text,
                }
            }

            return val
        })

        const completedList = completed.map((val) => {
            if (val.id === value.id) {
                return {
                    ...val,
                    value: text,
                }
            }

            return val
        })

        const activeList = active.map((val) => {
            if (val.id === value.id) {
                return {
                    ...val,
                    value: text,
                }
            }

            return val
        })

        setTask(taskList)

        setCompleted(completedList)

        setActive(activeList)
    }

    const taskCompleted = (newChecked) => {
        const newTask = []

        const activeTask = []

        task.forEach((val) => {
            if (newChecked.indexOf(val.id) !== -1) {
                newTask.push(val)
            }

            if (newChecked.indexOf(val.id) === -1) {
                activeTask.push(val)
            }
        })

        setActive(activeTask)

        setCompleted(newTask)
    }

    const deleteAll = () => {
        setTask([])
        setCompleted([])
        setActive([])
        setCheck([])
    }

    const deleteSelected = (checked) => {
        let newTask = []

        let newCompleted = []

        let newActive = []

        task.forEach((val) => {
            if (checked.indexOf(val.id) === -1) {
                newTask.push(val)
            }
        })

        completed.forEach((val) => {
            if (checked.indexOf(val.id) === -1) {
                newCompleted.push(val)
            }
        })

        active.forEach((val) => {
            if (checked.indexOf(val.id) === -1) {
                newActive.push(val)
            }
        })

        setTask(newTask)

        setCompleted(newCompleted)

        setActive(newActive)
    }

    return (
        <div className={classes.bg}>
            <BottomNavigation
                className={classes.nav}
                showLabels
                value={navigationValue}
                onChange={(event, newValue) => {
                    setNavigationValue(newValue)
                    setNavigation(newValue)
                    taskCompleted(check)
                }}
            >
                <BottomNavigationAction label="All tasks" />

                <BottomNavigationAction label="Completed tasks" />
                
                <BottomNavigationAction label="Active tasks" />
            </BottomNavigation>

            {
                navigation === 0 ? 
                (
                    <div className={classes.center}>
                        <Add addTask={addTask} />

                        <ListText taskList={task} check={check} selectedTask={selectedTask} active="list" modifyText={modifyText} deleteAll={deleteAll} deleteSelected={deleteSelected} />
                    </div>
                ) :
                navigation === 1 ? 
                (
                    <div className={classes.center}>
                        <ListText taskList={completed} check={check} selectedTask={selectedTask} active="complete" modifyText={modifyText} deleteAll={deleteAll} deleteSelected={deleteSelected} />
                    </div>
                ) : 
                (
                    <div className={classes.center}>
                        <ListText taskList={active} check={check} selectedTask={selectedTask} modifyText={modifyText} deleteAll={deleteAll} deleteSelected={deleteSelected} />
                    </div>
                )
            }
        </div>
    )
}

export default ToDoList
