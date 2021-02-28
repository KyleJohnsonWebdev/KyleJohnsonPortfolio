import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  rootPaper: {
    maxWidth: 700,
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

function ProductCategories(props) {
  const { classes } = props;
  const [consulting, setConsulting] = React.useState(false);
  const [wireFrames, setWireFrames] = React.useState(false);
  const [prototypes, setPrototypes] = React.useState(false);
  const [userTesting, setUserTesting] = React.useState(false);
  const [secondaryFollowUp, setSecondaryFollowUp] = React.useState(false);
  const [frontEndDevelopment, setFrontEndDevelopment] = React.useState(false);
  const [backEndDevelopment, setBackEndDevelopment] = React.useState(false);
  const [testing, setTesting] = React.useState(false);
  const [deployment, setDeployment] = React.useState(false);
  const [consultingExpanded, setConsultingExpanded] = React.useState(false);
  const [wireFramesExpanded, setWireFramesExpanded] = React.useState(false);
  const [prototypesExpanded, setPrototypesExpanded] = React.useState(false);
  const [userTestingExpanded, setUserTestingExpanded] = React.useState(false);
  const [secondaryFollowUpExpanded, setSecondaryFollowUpExpanded] = React.useState(false);
  const [frontEndDevelopmentExpanded, setFrontEndDevelopmentExpanded] = React.useState(false);
  const [backEndDevelopmentExpanded, setBackEndDevelopmentExpanded] = React.useState(false);
  const [testingExpanded, setTestingExpanded] = React.useState(false);
  const [deploymentExpanded, setDeploymentExpanded] = React.useState(false);


  const handleOpenConsulting = () => {
    setConsulting(true);
  };

  const handleCloseConsulting = () => {
    setConsulting(false);
  };
  const handleOpenWireFrames = () => {
    setWireFrames(true);
  };

  const handleCloseWireFrames = () => {
    setWireFrames(false);
  };
  const handleOpenPrototypes = () => {
    setPrototypes(true);
  };

  const handleClosePrototypes = () => {
    setPrototypes(false);
  };
  const handleOpenUserTesting = () => {
    setUserTesting(true);
  };

  const handleCloseUserTesting = () => {
    setUserTesting(false);
  };
  const handleOpenSecondaryFollowUp = () => {
    setSecondaryFollowUp(true);
  };

  const handleCloseSecondaryFollowUp = () => {
    setSecondaryFollowUp(false);
  };
  const handleOpenFrontEndDevelopment = () => {
    setFrontEndDevelopment(true);
  };

  const handleCloseFrontEndDevelopment = () => {
    setFrontEndDevelopment(false);
  };
  const handleOpenBackEndDevelopment = () => {
    setBackEndDevelopment(true);
  };

  const handleCloseBackEndDevelopment = () => {
    setBackEndDevelopment(false);
  };
  const handleOpenTesting = () => {
    setTesting(true);
  };

  const handleCloseTesting = () => {
    setTesting(false);
  };
  const handleOpenDeployment = () => {
    setDeployment(true);
  };

  const handleCloseDeployment = () => {
    setDeployment(false);
  };
  const handleOpenConsultingExpanded = () => {
    setConsultingExpanded(!consultingExpanded);
  };

  const handleOpenWireFramesExpanded = () => {
    setWireFramesExpanded(!wireFramesExpanded);
  };

  const handleOpenPrototypesExpanded = () => {
    setPrototypesExpanded(!prototypesExpanded);
  };

  const handleOpenUserTestingExpanded = () => {
    setUserTestingExpanded(!userTestingExpanded);
  };

  const handleOpenSecondaryFollowUpExpanded = () => {
    setSecondaryFollowUpExpanded(!secondaryFollowUpExpanded);
  };

  const handleOpenFrontEndDevelopmentExpanded = () => {
    setFrontEndDevelopmentExpanded(!frontEndDevelopmentExpanded);
  };


  const handleOpenBackEndDevelopmentExpanded = () => {
    setBackEndDevelopmentExpanded(!backEndDevelopmentExpanded);
  };


  const handleOpenTestingExpanded = () => {
    setTestingExpanded(!testingExpanded);
  };


  const handleOpenDeploymentExpanded = () => {
    setDeploymentExpanded(!deploymentExpanded);
  };





  const images = [
    {
      url:
        'https://live.staticflickr.com/65535/50984169501_5b5a08745b_h.jpg',
      title: 'CONSULTING',
      resources: 'I am here to figure out what your needs are. I am here for you. Let me help you make something great.',
      width: '40%',
      variable: consulting,
      setvariable: setConsulting,
      handleClose: handleCloseConsulting,
      handleOpen: handleOpenConsulting,
      variableExpanded: consultingExpanded,
      setvariableExpanded: setConsulting,
      handleOpenExpanded: handleOpenConsultingExpanded,
      example:'I will not try to upsell you. I will always explain processes. Your company has needs. Let me work with you.',
    },
    {
      url:
        'https://live.staticflickr.com/65535/50984247161_68b4bca7f9_h.jpg',
      title: 'WIRE FRAMES',
      resources: 'The first step in the process. I start with the old school method of pencil and paper.',
      width: '20%',
      variable: wireFrames,
      setvariable: setWireFrames,
      handleClose: handleCloseWireFrames,
      handleOpen: handleOpenWireFrames,
      variableExpanded: wireFramesExpanded,
      setvariableExpanded: setWireFramesExpanded,
      handleOpenExpanded: handleOpenWireFramesExpanded,
      example: 'The first set of wire frames are hand drawn. I sometimes will convert these hand drawn wire frames into a prototyping software called XD. The first stage is in greyscale. Little details are not included in this step.',
    },
    {
      url:
        'https://live.staticflickr.com/65535/50984276846_1cdb5ec6ff_b.jpg',
      title: 'PROTOTYPES',
      resources: 'I use adobe XD before I code anything. It is a good idea to figure out what you want before coding a project.',
      width: '40%',
      variable: prototypes,
      setvariable: setPrototypes,
      handleClose: handleClosePrototypes,
      handleOpen: handleOpenPrototypes,
      variableExpanded: prototypesExpanded,
      setvariableExpanded: setPrototypesExpanded,
      handleOpenExpanded: handleOpenPrototypesExpanded,
      example: 'This is where detail comes into play. We can figure out if the look feels right. Are buttons making sense? The prototype gives you a partially functional program. It is at this stage that user testing would occur.',
    },
    {
      url:
        'https://live.staticflickr.com/65535/50983577618_8793722066_b.jpg',
      title: 'USER TESTING',
      resources: 'Once we have the prototype, it is important to get user feedback. Does the site work logically? Is it confusing? Does it need to go back a step?',
      width: '38%',
      variable: userTesting,
      setvariable: setUserTesting,
      handleClose: handleCloseUserTesting,
      handleOpen: handleOpenUserTesting,
      variableExpanded: userTestingExpanded,
      setvariableExpanded: setUserTestingExpanded,
      handleOpenExpanded: handleOpenUserTestingExpanded,
      example: 'I like to use friends and family, but sometimes using people you do not know is best. I like to use heat maps to see what users are clicking on for each screen. Catching functionality errors at this stage is a quick fix. XD helps ensure that the end result is what the client wants before a single line of code is written.',
    },
    {
      url:
        'https://live.staticflickr.com/65535/50984265001_6d9e1ef697_b.jpg',
      title: 'SECONDARY FOLLOW UP',
      resources: 'It is time to follow up with you to see what you think. Let us not waste precious time and money over something. Let us get this right.',
      width: '38%',
      variable: secondaryFollowUp,
      setvariable: setSecondaryFollowUp,
      handleClose: handleCloseSecondaryFollowUp,
      handleOpen: handleOpenSecondaryFollowUp,
      variableExpanded: secondaryFollowUpExpanded,
      setvariableExpanded: setSecondaryFollowUpExpanded,
      handleOpenExpanded: handleOpenSecondaryFollowUpExpanded,
      example: 'After completing the user testing phase. I usually follow back up with the client to go over my findings. Sometimes I will even do the user testing with the client. Then let them know how they stacked up compared to others. It is important to make sure the app looks and functions correctly.',
    },
    {
      url:
        'https://live.staticflickr.com/65535/50984407647_e18fc38cea_b.jpg',
      title: 'FRONT END DEVELOPMENT',
      resources: 'I use ReactJS, but we can compromise if you have a project that uses a different library or Framework. Do you like Angular? Great! Let us get started making your beautiful front end site today!',
      width: '24%',
      variable: frontEndDevelopment,
      setvariable: setFrontEndDevelopment,
      handleClose: handleCloseFrontEndDevelopment,
      handleOpen: handleOpenFrontEndDevelopment,
      variableExpanded: frontEndDevelopmentExpanded,
      setvariableExpanded: setFrontEndDevelopmentExpanded,
      handleOpenExpanded: handleOpenFrontEndDevelopmentExpanded,
      example: 'Depending on the project, I usually start with test driven development. This means figuring out tests ahead of coding so that I can create and push clean code. I will approach a project using ReactJs. I like to use google analytics and some third pary libraries such as Helmut to address SEO concerns. Project architecture depends on the clients need. Redux, hooks, thunk, class components, functional components, and state management are all part of my front end process.',
    },
    {
      url:
        'https://live.staticflickr.com/65535/50984413637_a5826604b0_b.jpg',
      title: 'BACK END DEVELOPMENT',
      resources: 'I use NodeJS, but we can compromise if you have a project that uses a different language. Do you like Python or C#? Great! Let us get started making your restful API today!',
      width: '40%',
      variable: backEndDevelopment,
      setvariable: setBackEndDevelopment,
      handleClose: handleCloseBackEndDevelopment,
      handleOpen: handleOpenBackEndDevelopment,
      variableExpanded: backEndDevelopmentExpanded,
      setvariableExpanded: setBackEndDevelopmentExpanded,
      handleOpenExpanded: handleOpenBackEndDevelopmentExpanded,
      example: 'There are a few components I take into account when creating a restful API. Error handling is the main one. How am I telling the front end when something goes wrong. Overcoming those errors are easy with propper error handling. My front end components contain a minimal amount of business logic, that is the job of the back end. ',
    },
    {
      url:
        'https://live.staticflickr.com/65535/50983585653_742025a24a_b.jpg',
      title: 'TESTING',
      resources: 'Functionality Testing, Usability Testing, Interface Testing, Compatibility Testing, and  Performance Testing. If you need testing, I do it. Test driven development is the best plan. No more buggy code!',
      width: '20%',
      variable: testing,
      setvariable: setTesting,
      handleClose: handleCloseTesting,
      handleOpen: handleOpenTesting,
      variableExpanded: testingExpanded,
      setvariableExpanded: setTestingExpanded,
      handleOpenExpanded: handleOpenTestingExpanded,
      example: 'The test driven development used in the front end process usually cuts down on the testing time frame. I will always implement usability testing. Testing depends on what the client wants.',
    },
    {
      url:
        'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80',
      title: 'DEPLOYMENT',
      resources: 'This site was deployed on github pages, but we can deploy on a number of platforms. Do you like Heroku? Sit back and relax. Let me figure out the best option for your budget. ',
      width: '40%',
      variable: deployment,
      setvariable: setDeployment,
      handleClose: handleCloseDeployment,
      handleOpen: handleOpenDeployment,
      variableExpanded: deploymentExpanded,
      setvariableExpanded: setDeploymentExpanded,
      handleOpenExpanded: handleOpenDeploymentExpanded,
      example: 'I am always going to keep a client and their budget in mind when deploying. Are we looking at a fourtune 500 company? Then github pages is not the answer. There are a number of options for each circumstance. Let me help guide your decision making process.',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        THE PROCESS OF CREATING A GREAT SITE
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (

          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton} onClick={image.handleOpen}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>

              <Modal
                aria-labelledby={image.title}
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={image.variable}
                onClose={image.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={image.variable}>
                <Card className={classes.rootPaper}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        KJ
                      </Avatar>
                    }

                    title={image.title}

                  />
                  <CardMedia
                    className={classes.media}
                    image={image.url}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {image.resources}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>

       <IconButton
         className={clsx(classes.expand, {
           [classes.expandOpen]: image.variableExpanded,
         })}
         onClick={image.handleOpenExpanded}
         aria-expanded={image.variableExpanded}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </IconButton>
     </CardActions>
     <Collapse in={image.variableExpanded} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph>
           {image.example}
         </Typography>

       </CardContent>
     </Collapse>
                  </Card>
                </Fade>
              </Modal>

          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
