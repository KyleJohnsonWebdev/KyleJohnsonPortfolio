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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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


  const images = [
    {
      url:
        'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
      title: 'CONSULTING',
      resources: 'I am here to figure out what your needs are. I am here for you. Let me help you make something great.',
      width: '40%',
      variable: consulting,
      setvariable: setConsulting,
      handleClose: handleCloseConsulting,
      handleOpen: handleOpenConsulting,
    },
    {
      url:
        'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
      title: 'WIRE FRAMES',
      resources: 'The first step in the process. I start with the old school method of pencil and paper.',
      width: '20%',
      variable: wireFrames,
      setvariable: setWireFrames,
      handleClose: handleCloseWireFrames,
      handleOpen: handleOpenWireFrames,
    },
    {
      url:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
      title: 'PROTOTYPES',
      resources: 'I use adobe XD before I code anything. It is a good idea to figure out what you want before begining a project',
      width: '40%',
      variable: prototypes,
      setvariable: setPrototypes,
      handleClose: handleClosePrototypes,
      handleOpen: handleOpenPrototypes,
    },
    {
      url:
        'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
      title: 'USER TESTING',
      resources: 'Once we have the prototype, it is important to get user feedback. Does the site work logically? Is it confusing? Does it need to go back a step? This is where user testing occurs.',
      width: '38%',
      variable: userTesting,
      setvariable: setUserTesting,
      handleClose: handleCloseUserTesting,
      handleOpen: handleOpenUserTesting,
    },
    {
      url:
        'https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400&q=80',
      title: 'SECONDARY FOLLOW UP',
      resources: 'It is time to follow up with you to see what you think. Let us not waste precious time and money over something. Let us get this right.',
      width: '38%',
      variable: secondaryFollowUp,
      setvariable: setSecondaryFollowUp,
      handleClose: handleCloseSecondaryFollowUp,
      handleOpen: handleOpenSecondaryFollowUp,
    },
    {
      url:
        'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80',
      title: 'FRONT END DEVELOPMENT',
      resources: 'I use ReactJS, but we can compromise if you have a project that uses a different library or Framework. Do you like Angular? Great! Let us get started making your beautiful front end site today!',
      width: '24%',
      variable: frontEndDevelopment,
      setvariable: setFrontEndDevelopment,
      handleClose: handleCloseFrontEndDevelopment,
      handleOpen: handleOpenFrontEndDevelopment,
    },
    {
      url:
        'https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?auto=format&fit=crop&w=400&q=80',
      title: 'BACK END DEVELOPMENT',
      resources: 'I use NodeJS, but we can compromise if you have a project that uses a different language. Do you like Python or C#? Great! Let us get started making your restful API today!',
      width: '40%',
      variable: backEndDevelopment,
      setvariable: setBackEndDevelopment,
      handleClose: handleCloseBackEndDevelopment,
      handleOpen: handleOpenBackEndDevelopment,
    },
    {
      url:
        'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80',
      title: 'TESTING',
      resources: 'Functionality Testing, Usability Testing, Interface Testing, Compatibility Testing, and  Performance Testing. If you need testing, I do it.',
      width: '20%',
      variable: testing,
      setvariable: setTesting,
      handleClose: handleCloseTesting,
      handleOpen: handleOpenTesting,
    },
    {
      url:
        'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80',
      title: 'DEPLOYMENT',
      resources: 'This site was deployed on github pages, but we can deploy on a number of platforms. Do you like Heroku? Let me figure out the best option for your budget.',
      width: '40%',
      variable: deployment,
      setvariable: setDeployment,
      handleClose: handleCloseDeployment,
      handleOpen: handleOpenDeployment,
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
