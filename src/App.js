import './App.css';
import { Button as VolvoButton } from "@volvo/vcdk-react";
import { Button as MuiButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button as BootstrapButton } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import VolvoComponent from './VolvoComponent';
import MaterialUIComponent from './MaterialUIComponent';
import BootstrapComponent from './BootstrapComponent';
import "@volvo/vcdk/themes/all-semantic.css"; // Import all brands and modes
import { VcdkElement } from "@volvo/vcdk/vcdk-element";

// Set the default theme
VcdkElement.defaultTheme = "renault-light";

function Home() {
  return (
    <div className="App">
      <h1>Styling React Component Library Demo</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Link to="/volvo-experience">
            <VolvoButton variant="marketing" size="medium">
              Volvo Experience
            </VolvoButton>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/material-ui">
            <MuiButton variant="contained" color="primary">
              Material UI
            </MuiButton>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/bootstrap">
            <BootstrapButton variant="primary">
              Bootstrap
            </BootstrapButton>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volvo-experience" element={<VolvoComponent />} />
        <Route path="/material-ui" element={<MaterialUIComponent />} />
        <Route path="/bootstrap" element={<BootstrapComponent />} />
      </Routes>
    </Router>
  );
}

export default App;