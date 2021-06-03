import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Title from './Title';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const chartConfigs = {
  type: 'angulargauge',
  width: 500,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "반도체 생산량 (chip단위)",
      "lowerLimit": "0",
      "upperLimit": "110000",
      "showValue": "1",
      "numberSuffix": "개",
      "theme": "fusion",
      "showToolTip": "0"
    },
    "colorRange": {
      "color": [
        {
          "minValue": "0",
          "maxValue": "40000",
          "code": "#F2726F"
        },
        {
          "minValue": "40000",
          "maxValue": "70000",
          "code": "#FFC533"
        },
        {
          "minValue": "70000",
          "maxValue": "110000",
          "code": "#62B58F"
        }
      ]
    },
    "dials": {
      "dial": [
        {
          "value": 55000
        }
      ]
    }
  },
};

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  dailystyle: {
    fontSize: '30',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  abnormalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

});

function Clock(props) {
  return (
    <div>
      <h3>{props.date.getFullYear()} . {props.date.getMonth() + 1} . {props.date.getDay() - 1}</h3>
      <h4>{props.date.toLocaleTimeString()}</h4>
    </div>
  );
}

export default function Daily() {
  const [abnormal, setAbnormal] = useState(10);
  const [date, setDate] = useState(new Date());
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setAbnormal(Math.round(Math.random() * 10 + 1));
    }, 1000);
  }, [abnormal, date])

  return (
    <div>
      <div>
        <Title className={classes.titleStyle}>일일 현황</Title>
      </div>
      <div className={classes.dailystyle}>
        {/* // <React.Fragment> */}
        <Clock date={new Date()} />
        <ReactFC {...chartConfigs} />
        <div className={classes.abnormalContainer}>
          <Typography component="h1" variant="h2">
            총 불량률
        </Typography>
          <Typography component="h1" variant="h2">
            {abnormal}%
        </Typography>
        </div>

        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
      </div>
    </div>
    // {/* </React.Fragment> */}
  );
}