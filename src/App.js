import './App.css';
import { Button as MuiButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button as BootstrapButton } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import VolvoComponent from './components/VolvoComponent';
import MaterialUIComponent from './components/MaterialUIComponent';
import BootstrapComponent from './components/BootstrapComponent';
import VolvoTheme from './components/VolvoTheme';
import "@volvo/vcdk/themes/all-semantic.css"; 
import "@volvo/vcdk/themes/volvo/semantic-dark.css";
import "@volvo/vcdk/themes/volvo/semantic-light.css";
import { VcdkElement } from "@volvo/vcdk/vcdk-element";
import WithoutStyling from './components/WithoutStyling';
// Set the default theme
VcdkElement.defaultTheme = "volvo-light";

function Home() {
  return (
    <div className="App">
      <h1 style={{ margin: "12px" }}>Styling React Component Library Demo</h1>
      <Grid className="parent_cls">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Link to="/volvo-experience">
              <vcdk-button variant="marketing"  >
                Volvo Experience
              </vcdk-button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/volvo-theme">
              <vcdk-button variant="tertiary" className="custom-theme_button">
                VolvoTheme
              </vcdk-button>


            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/material-ui">
              <MuiButton variant="contained" color="primary">
                Material UI
              </MuiButton>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/bootstrap">
              <BootstrapButton variant="secondary">
                Bootstrap
              </BootstrapButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="parent_cls">
      <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
      <Link to="/without-styling">
      <button>Click Me</button>
      </Link>
      </Grid>
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
        <Route path="/volvo-theme" element={<VolvoTheme />} />
        <Route path="/without-styling" element ={<WithoutStyling/>} />
      </Routes>
    </Router>
  );
}

export default App;