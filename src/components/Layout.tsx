import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { deepPurple } from '@mui/material/colors';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Made by '}
        <Link color="inherit" href="https://github.com/montycode">
          Montycode
        </Link>{', '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const Layout: React.FC = ({ children }) => {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    <LibraryAddCheckIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Todos App
                </Typography>
                {children}
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default Layout
