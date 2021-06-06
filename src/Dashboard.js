import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import Daily from './Daily';
import PostChart from './PostChart';
import Title from './Title';
import Color from './Color';
import { ResponsiveBullet } from '@nivo/bullet'
import '@grapecity/wijmo.styles/wijmo.css';
import * as wjGauge from '@grapecity/wijmo.react.gauge';
import './assets/css/bootstrap.css';


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
    height: 450,
    overflow: 'hidden'
  },
  fixedHeight2: {
    height: 450,
    overflow: 'hidden'
  },
  style1: {
    flexDirection: 'row',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paramContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  paramTable: {
    height: '100px'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '30em'
  },
  max: {
    fontSize: '2rem',
  },
}));

// const theme = createMuiTheme({
//   palette: {
//     primary: green
//   }
// })

const greenTheme = createMuiTheme({
  palette: {
    primary: { main: '#61B58F' },
    secondary: { main: '#61B58F' }
  },
});

const redTheme = createMuiTheme({
  palette: {
    primary: { main: '#F2726F' },
    secondary: { main: '#61B58F' }
  },
});

export default function Dashboard() {
  const classes = useStyles();

  const [myTheme, setMyTheme] = useState(redTheme);

  const [value1, setValue1] = useState(195);

  const [abnormal, setAbnormal] = useState(10);

  const [paramData, setParamData] = useState([
    { heading: '수율', sub: '%', max: 100, actual: 85, target: 90, good: 90 },
  ]);

  function renderSpan(item) {
    if (item.actual < item.target) {
      return <span className="glyphicon glyphicon-thumbs-down warning"></span>;
    }
    return;
  }
  function renderTableTr(item) {
    return (<tr key={item.heading}>
      <td>
        <div className="heading">{item.heading}</div>
        <div className="sub">{item.sub}</div>
      </td>
      <td>
        {renderSpan(item)}
      </td>
      <td>
        <wjGauge.BulletGraph value={item.actual} target={item.target} max={item.max} bad={item.bad} good={item.good}></wjGauge.BulletGraph>
      </td>
      <td>
        <div className="max">{item.max}</div>
      </td>
    </tr>);
  }
  function renderTable() {
    let table = [];
    paramData.forEach(item => {
      table.push(renderTableTr(item));
    });
    return table;
  }

  useEffect(() => {
    setTimeout(() => {
      setAbnormal(4);
    }, 12000);
    if (value1 > 186) {
      setMyTheme(redTheme);
    }
  }, [value1])

  const handleClick = (e, value) => {
    if (value1 >= 100) {
      if (value === 'green') {
        setMyTheme(greenTheme);
        setValue1(186);
        setParamData([{ heading: '수율', sub: '%', max: 100, actual: 93, target: 90, good: 90 },])
      } else if (value === 'red') {
        setMyTheme(redTheme);
      }
    }
  }

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
  const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);
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
            <Grid item xs={12} md={4} lg={12} className={classes.headerContainer}>
              <Paper className={fixedHeightPaper}>
                <Daily abnormal={abnormal} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Paper className={fixedHeightPaper2}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Paper className={fixedHeightPaper2}>
                <PostChart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
                <div className={classes.titleContainer}>
                  <Title>2 주요 파라미터 조절</Title>
                </div>

                <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
                  path : 12321
                </Typography>
                <div className={classes.style1}>
                  <Button variant="contained" color="secondary" size="large">
                    <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
                      Thin F4:683
                      </Typography>
                  </Button>

                  <Button variant="contained" color="secondary" size="large">
                    <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
                      Temp_Oxid:1344
                      </Typography>
                  </Button>
                  <ThemeProvider theme={myTheme}>
                    <Button variant="contained" color="primary" onClick={(e) => { handleClick(e, 'green') }} size="large">
                      <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
                        Etching_Rate:{value1}
                      </Typography>
                    </Button>
                  </ThemeProvider>
                </div>
                <table className={classes.paramTable}>
                  {renderTable()}
                </table>
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