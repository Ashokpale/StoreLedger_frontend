import { Button, Container, Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Store Ledger
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Built with Material UI and Next.js
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
