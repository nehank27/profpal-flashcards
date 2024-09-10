import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import { Container, Toolbar, Typography, AppBar,Button, Box, Grid } from "@mui/material";
import Head from 'next/head'

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>ProfPal Flashcards</title>
        <meta name="description" content="Create study resources from your notes"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant= "h6" style = {{flexGrow: 1}}> ProfPal Flashcards</Typography>
          <SignedOut>
            <Button color="inherit" href ="/sign-in"> Sign In</Button>
            <Button color ="inherit" href ="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>

          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{textAlign: 'center', my:4,}}>
        <Typography variant="h2" gutterBottom>Welcome to ProfPal Flashcards</Typography>
        <Typography variant="h5" gutterBottom>
          {' '}
        The easiest way to study for your Professors exams!</Typography>
        <Button variant='contained' color='primary' sx={{mt:2}}>
          Get Started
        </Button>
      </Box>
      <Box sx={{my:6}}>
        <Typography variant="h4" gutterBottom> Features</Typography>
        <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Adaptive Study Guides</Typography>
          <Typography>{' '}Our AI adapts to any content you upload and provides a study plan that helps you iteratively improve.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Seamless Fast Uploads</Typography>
          <Typography>{' '}Notes, links, images, slides, you name it. Our fast upload speeds and production gets you ready to go fast.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Proven Study Formulas</Typography>
          <Typography>{' '}We formulate study plans that best suit you, and employ methods to hack you brain to help understanding and revision.</Typography>
        </Grid>
      </Grid>

      </Box>

      <Box sx={{my:6, textAlign:'center'}}>
        <Typography variant="h4" gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{p:3, border:'1px solid', borderColor:'grey.300', borderRadius:2,}}>
          <Typography variant="h5" gutterBottom>Free</Typography>
          <Typography variant="h6" gutterBottom>$0 / month</Typography>
          <Typography>{' '}Access to basic features, limited storage and usage.</Typography>
          <Button variant="contained" color="primary" sx={{mt:2}}>Go Free</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{p:3, border:'1px solid', borderColor:'grey.300', borderRadius:2,}}>
          <Typography variant="h5" gutterBottom>Premium</Typography>
          <Typography variant="h6" gutterBottom>$5 / month</Typography>
          <Typography>{' '}Access to advanced features, more storage and usage.</Typography>
          <Button variant="contained" color="primary" sx={{mt:2}}>Go Premium</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{p:3, border:'1px solid', borderColor:'grey.300', borderRadius:2,}}>
          <Typography variant="h5" gutterBottom>Pro</Typography>
          <Typography variant="h6" gutterBottom>$10 / month</Typography>
          <Typography>{' '}Access to all features, unlimited storage and usage.</Typography>
          <Button variant="contained" color="primary" sx={{mt:2}}>Go Pro</Button>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </Container>
    
  )
}
