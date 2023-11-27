import * as React from 'react';
import { useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@mui/material';

// imports for notes preview
import { Storage } from 'aws-amplify';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
// Import styles for toolbar
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

// imports for fullscreen
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ImageSlider({ id }) {
  const [selectedUrl, setSelectedUrl] = useState('');
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (url) => {
    setSelectedUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [signedUrl, setSignedUrl] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  useEffect(() => {
    Storage.list(id + '/')
      .then(({ results }) => {
        const promises = results.map(({ key }) => Storage.get(key));
        Promise.all(promises)
          .then((signedURLs) => {
            setSignedUrl(signedURLs);
            console.log("hello: ", signedURLs); // For debugging or further use
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [id]);

  const maxSteps = signedUrl.length;
  const handleNext = () => {
    setActiveStep(prevActiveStep => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Grid container
      position={"relative"}
      alignItems="center"     // Vertically center the content
      justifyContent="center" // Horizontally center the content
      >
      <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} >
        {
          signedUrl.map((url, index) => (
            <div key={index}
              style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                objectFit: "cover",
                height: "40vh", // Set a fixed height
                width: "100px",  // Set a fixed width
                margin: "auto",
                cursor: "pointer"
              }}
            >
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <div onClick={() => handleClickOpen(url)}>
                  <Viewer fileUrl={url}/>
                </div>
              </Worker>
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >
                <AppBar sx={{ position: 'relative' }}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </AppBar>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <Toolbar/>
                  <Viewer fileUrl={selectedUrl} plugins={[toolbarPluginInstance]} />
                </Worker>
              </Dialog>
            </div>
          ))
        }
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{ backgroundColor: 'white', position: 'absolute', bottom: 0, left: 0, right: 0 }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button onClick={handleNext}>
            Next
            <KeyboardArrowRight/>
          </Button>
        }
        backButton={
          <Button onClick={handleBack}>
            <KeyboardArrowLeft/>
            Back
          </Button>
        }
      />
    </Grid>
  );
}

export default ImageSlider;
