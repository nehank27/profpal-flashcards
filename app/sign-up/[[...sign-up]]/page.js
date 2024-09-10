import { Typography, Container, AppBar, Toolbar, Button, Box} from "@mui/material";
import {SignUp} from '@clerk/nextjs'
import Link from 'next/link'

export default function SignUpPage(){
    return (<Container maxWidth = "100vw">
        <AppBar positon = "static">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow:1,}}>ProfPal Flashcards</Typography>
                <Button color="inherit">
                    <Link href="/sign-in" passHref>Sign In</Link>
                </Button>
                <Button color="inherit">
                    <Link href="/sign-up" passHref>Sign Up</Link>
                </Button>
            </Toolbar>
        </AppBar>
        <Box display = "flex" flexDirection = "column" alignItems="center" justifyContent="center">
            <Typography variant="h4">Sign Up</Typography>
            <SignUp />
        </Box>

    </Container>
    )
}