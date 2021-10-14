import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice'; // Action to dispatch

const AddTodoForm: React.FC = () => {
	const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
		event.preventDefault();
        dispatch(
            addTodo({
                title: value // Payload passed to action
            })
        )
		console.log('user entered: ' + value);
        setValue('');
	};

    return(
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            onSubmit={onSubmit}
            autoComplete="off"
            >
            <TextField 
                id="todoName" 
                label="Todo Name" 
                variant="standard" 
                placeholder='Add todo...' 
                required
                value={value}
                onChange={(event) => setValue(event.target.value)} 
            />
            <Button color="secondary" type="submit">Submit</Button>
        </Box>
    )
}

export default AddTodoForm