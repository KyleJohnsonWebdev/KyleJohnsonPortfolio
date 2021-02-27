import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import texture from './texture.jpg';
import consult from './consultation.png';
import code from './coding.png';
import ux from './touch.png';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={consult}
                alt="consultant"
              />
              <Typography variant="h6" className={classes.title}>
                Consult
              </Typography>
              <Typography variant="h5">
                {'Planning is an essential phase of anything great'}
                {'. We will work with your needs to acheive your goals.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={ux}
                alt="ux-ui"
              />
              <Typography variant="h6" className={classes.title}>
                UX-UI
              </Typography>
              <Typography variant="h5">
                {'It is important to understand your target audience… '}
                {'and how they will interact with your site.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={code}
                alt="code"
              />
              <Typography variant="h6" className={classes.title}>
                CODE
              </Typography>
              <Typography variant="h5">
                {'Simplicity, design, modularity, and readability are the best ways to achieve an efficient clean code base. '}
                {'A step up from the rest.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
