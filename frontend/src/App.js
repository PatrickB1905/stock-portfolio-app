import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Stock Portfolio
          </Typography>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/register">Register</Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: 24 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* other routes */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
