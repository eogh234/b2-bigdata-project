/**
 * @author : 이종범
 * @description
 * Material-UI에서 제공하는 createMuiTheme과 ThemeProvider을 이용하여
 * 색의 테마를 자유롭게 바꿀 수 있도록 작성함.
 * 상단의 버튼을 클릭하면 어플리케이션의 전체적인 테마 색이 변경됨.
 * 간결한 코드로 어플리케이션의 테마 색을 변경할 수 있음.
 * @since : 2020.05.1
*/
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
const Color = () => {
  /**
   * @description
   * 상단 메뉴의 버튼을 클릭하며 myTheme이라는 state를 변경함.
   * 이 값에 따라 서로 다른 theme 객체를 ThemeProvider의 props값으로 전달함.
   */
  const useStyles = makeStyles(theme =>
    ({
      root: {
        height: '100%',
        background: theme.palette.background.default
      },
      menuIconButton: {
        marginRight: theme.spacing(2),
      },
      menuTitle: {
        flexGrow: 5,
      },
      menuButton: {
        marginRight: theme.spacing(2),
        flexGrow: 1,
        display: 'flex'
      },
    })
  );
  const blueTheme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });
  const redTheme = createMuiTheme({
    palette: {
      primary: red,
    },
  });
  const greenTheme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#202020',
      },
    },
  });
  const classes = useStyles();
  const [myTheme, setMyTheme] = useState(blueTheme);
  const handleClick = (e, value) => {
    if (value === 'blue') {
      setMyTheme(blueTheme);
    } else if (value === 'red') {
      setMyTheme(redTheme);
    } else if (value === 'green') {
      setMyTheme(greenTheme);
    }else if (value === 'dark') {
      setMyTheme(darkTheme);
    }
  }
  return (
    <ThemeProvider theme={myTheme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuIconButton} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.menuTitle}>
              News
          </Typography>
            <div className={classes.menuButton}>
              <Button color="inherit" onClick={(e) => { handleClick(e, 'blue') }}>Blue</Button>
              <Button color="inherit" onClick={(e) => { handleClick(e, 'red') }}>Red</Button>
              <Button color="inherit" onClick={(e) => { handleClick(e, 'green') }}>Green</Button>
              <Button color="inherit" onClick={(e) => { handleClick(e, 'dark') }}>Dark</Button>
            </div>
          </Toolbar>
        </AppBar>
        <ColorThemeTutorialContent />
      </div>
    </ThemeProvider>
  );
}

const ColorThemeTutorialContent = () => {
    /**
   * @description
   * 부모 component에서 결정한 theme 객체에 따라 서로 다른 색을 가지도록 작성함.
   * 이때 색을 theme객체의 값을 이용하여 설정하였기 떄문에 theme 객체가 바뀐다고해도 코드를 수정할 필요가 없음.
   */
  const useStyles = makeStyles((theme) =>
    ({
      root: {
        height: '100%',
        background: theme.palette.background.default,
        padding: theme.spacing(2)
      },
      contentButtonMain: {
        background: theme.palette.primary.main,
        color: theme.palette.text.primary
      },
      contentButtonDark: {
        background: theme.palette.primary.dark,
        color: theme.palette.text.primary
      },
      contentButtonLight: {
        background: theme.palette.primary.light,
        color: theme.palette.text.primary
      },
      contentTitle1: {
        color: theme.palette.text.primary
      },
      contentTitle2: {
        color: theme.palette.text.secondary
      }
    }),
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button className={classes.contentButtonDark} variant="contained">Button</Button>
      <Button className={classes.contentButtonMain} variant="contained">Button</Button>
      <Button className={classes.contentButtonLight} variant="contained">Button</Button>
      <Typography variant="h6" className={classes.contentTitle1}>Typography</Typography>
      <Typography variant="h6" className={classes.contentTitle2}>Typography</Typography>
    </div>
  )
}

export default Color;