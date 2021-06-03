import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx';
import React, { useState } from 'react';
import { AwesomeButton } from "react-awesome-button";
import Chart from './Chart';
import Deposits from './Deposits';
import { mainListItems, secondaryListItems } from './listItems';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://plms.postech.ac.kr/">
        B2-BIGDATA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;
function createData(normal_range, ThinF4, Temp_Oxid, Etching_Rate) {
  return { normal_range, ThinF4, Temp_Oxid, Etching_Rate };
}

const rows = [
  createData('upper', '680~687', '1294~1348', '185.4~192.9'),
  createData('lower', '-49.0~151.0', '862.01~871.01', '167.07~167.6')

];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#424242'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  boxPaper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fixedHeight: {
    height: 550,
    overflow: 'hidden'
  },
  style1: {
    flexDirection: 'row',
    overflow: 'hidden',
    display: 'flex',
  },
  box1: {
    borderColor: 'green',
    border: '3px solid rgba(0,0,0,0.05)'
  },
  box2: {
    borderColor: 'green',
    border: '3px solid rgba(0,0,0,0.05)'
  },
  box3: {
    borderColor: 'red',
    border: '3px solid rgba(0,0,0,0.05)',
  },
  table: {
    maxWidth: 580
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [borderStyle, setBorderStyle] = useState({
    borderColor: 'red',
    border: '3px solid rgba(0,0,0,0.05)'
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="flex" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            반도체 공정 실시간 모니터링
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  path : 12321
                </Typography>
                <div className={classes.style1}>
                  <Grid item xs={12} className={classes.box1}>
                    <Paper className={classes.boxPaper}>
                      {/* <Orders /> */}
                      <AwesomeButton type="primary" size="large">
                        <Typography component="h1" variant="h3" color="inherit" noWrap className={classes.title}>
                          1234
                      </Typography>
                      </AwesomeButton>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} className={classes.box2}>
                    <Paper className={classes.boxPaper}>
                      {/* <Orders /> */}
                      <AwesomeButton type="primary" size="large">
                        <Typography component="h1" variant="h3" color="inherit" noWrap className={classes.title}>
                          41234
                      </Typography>
                      </AwesomeButton>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} className={classes.box3}>
                    <Paper className={classes.boxPaper}>
                      {/* <Orders /> */}
                      <AwesomeButton type="primary" size="large">
                        <Typography component="h1" variant="h3" color="inherit" noWrap className={classes.title}>
                          200
                      </Typography>
                      </AwesomeButton>
                    </Paper>
                  </Grid>
                </div>
                {/* 테이블 표 만들기 */}
                <div style={{ height: 400, width: '100%' }}>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow className={classes.table}>
                          <TableCell>정상범위 \ 파라미터 이름</TableCell>
                          <TableCell align="right">Thin F4</TableCell>
                          <TableCell align="right">Temp_Oxid</TableCell>
                          <TableCell align="right">Etching_Rate</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>{rows.map((row) => (
                        <TableRow key={row.normal_range}>
                          <TableCell component="th" scope="row">
                            {row.normal_range}
                          </TableCell>
                          <TableCell align="right">
                            {row.ThinF4}
                          </TableCell>
                          <TableCell align="right">
                            {row.Temp_Oxid}
                          </TableCell>
                          <TableCell align="right">
                            {row.Etching_Rate}
                          </TableCell>
                        </TableRow>))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main >
    </div >
  );
}