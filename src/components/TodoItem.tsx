import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import { TodoItemProps } from '../interfaces/TodoItemProps';

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(toggleComplete({
            id: id, 
            completed: !completed
        }))
    };

    const handleDelete = () => {
        dispatch(deleteTodo({ id: id }))
    };

    return (
        <ListItem 
            key={title}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
            >
            <ListItemButton role={undefined} onClick={handleComplete} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': id.toString() }}
                />
              </ListItemIcon>
              <ListItemText id={id.toString()} primary={title} />
            </ListItemButton>
        </ListItem>
    )
}

export default TodoItem
