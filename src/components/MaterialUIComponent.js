import React from 'react';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import StepButton from '@mui/material/StepButton';  
import { createTheme, ThemeProvider } from "@mui/material/styles";


import './MaterialUIComponent.css';

const MaterialUIComponent = () => {
    const steps = ['Select Discount', 'Configure Location', 'Define Discount', 'Attach Files','Summary'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
  
    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return Object.keys(completed).length;
    };
  
    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };
  
    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };
  
    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStep = (step) => () => {
      setActiveStep(step);
    };
  
    const handleComplete = () => {
      setCompleted({
        ...completed,
        [activeStep]: true,
      });
      handleNext();
    };
  
    const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
    };


    const theme = createTheme({
        components: {
          MuiAccordion: {
            styleOverrides: {
              root: {
                width: "70%"
              },
            },
          },
          MuiAccordionSummary: {
            styleOverrides: {
              content: {
                color: "orange", 
              },
            },
          },
          MuiAccordionActions: {
            styleOverrides: {
              root: {
                "& .MuiButton-root:first-of-type": {
                  color: "darkorange", 
                },
              },
            },
          },
          MuiStepIcon: {
            styleOverrides: {
              root: {
                "&.Mui-active": {
                  color: "black", // Equivalent to `.stepper_sample .MuiSvgIcon-root.MuiStepIcon-root.Mui-active`
                },
                "&.Mui-completed": {
                  color: "black", // Equivalent to `.stepper_sample .MuiSvgIcon-root.MuiStepIcon-root.Mui-completed`
                },
              },
            },
          },
        },
      });
      
    return (
        <ThemeProvider theme={theme}>
        <div style={{ margin: "2%" }}>
            <h1>Hello, Material-UI!</h1>
            <Button variant="contained" color="primary">
                Click Me
            </Button>

            <div style={{ margin: "2%" }} className="accrodian_sample">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Order filter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">Price filter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <Typography component="span">Customer calssfication filter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div>

            <Box sx={{ width: '100%' }} className ="stepper_sample">
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>

        </div>
        </ThemeProvider>
    );
};

export default MaterialUIComponent;