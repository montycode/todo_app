import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const CompleteItems: React.FC = () => {
    const todos = useSelector((state: any) => state.todos.length);

    const completedTodos = useSelector((state:any ) => 
        state.todos.filter((todo: any) => todo.completed === true)
    );

    const progressValue = (completedTodos.length / todos) * 100;

    if(todos > 0) {
        return (
            <Box sx={{ width: '100%', maxWidth: 360 }}>
                <LinearProgress variant="determinate" color="secondary" value={Math.round(progressValue)}/>
            </Box>
        )
    } else {
        return <Typography variant="caption" component="div" color="text.secondary">Todo list is empty. </Typography>
    }
}

export default CompleteItems;