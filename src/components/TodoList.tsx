import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList:React.FC = () => {

    const todos = useSelector((state: any) => state.todos);

    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo:any)=> (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </List>
    )
}

export default TodoList;