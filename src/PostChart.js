import React, { useEffect, useState } from 'react';
import { makeStyles, responsiveFontSizes, useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { ResponsiveBump } from '@nivo/bump'
import { Image, PinDropSharp } from '@material-ui/icons';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  {
    "id": "Path 1",
    "color": "hsl(280, 40%, 80%)",
    "data": [
      {
        "x": "1.Oxidation",
        "y": 3
      },
      {
        "x": "2.Photo_Soft",
        "y": 1
      },
      {
        "x": "3.Photo_Litho",
        "y": 2
      },
      {
        "x": "4.Etching",
        "y": 2
      },
      {
        "x": "5.Ion_Implantation",
        "y": 1
      }
    ]
  },
  {
    "id": "Path 2",
    "color": "hsl(280, 40%, 80%)",
    "data": [
      {
        "x": "1.Oxidation",
        "y": 1
      },
      {
        "x": "2.Photo_Soft",
        "y": 2
      },
      {
        "x": "3.Photo_Litho",
        "y": 1
      },
      {
        "x": "4.Etching",
        "y": 3
      },
      {
        "x": "5.Ion_Implantation",
        "y": 2
      }
    ]
  },
  {
    "id": "Path 3",
    "data": [
      {
        "x": "1.Oxidation",
        "y": 2
      },
      {
        "x": "2.Photo_Soft",
        "y": 3
      },
      {
        "x": "3.Photo_Litho",
        "y": 3
      },
      {
        "x": "4.Etching",
        "y": 1
      },
      {
        "x": "5.Ion_Implantation",
        "y": 3
      }
    ]
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'row',
    
    
  },
  leftContainer: {
    width: '90%',
    height: '92%',
    display: 'inline-block',
  },
  rightContainer: {
    display: 'inline-block',
    backgroundColor: 'red',

  },

}));


export default function PostChart() {
  const theme = useTheme();
  const classes = useStyles();
  const [lineColor, setLineColor] = useState(['#61B58F', '#61B58F', '#61B58F']);

  useEffect(() => {
    
  }, [])

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Title>1-(2) 최적화 알고리즘 적용 Path</Title>
        </div>
        <div className={classes.leftContainer}>
          <ResponsiveBump
            data={data}
            margin={{ top: 40, right: 80, bottom: 250, left: 60 }}
            colors={lineColor}
            lineWidth={3}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            pointSize={40}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ from: 'serie.color' }}
            axisTop={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: -36
            }}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Chamber',
              legendPosition: 'middle',
              legendOffset: -40
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}