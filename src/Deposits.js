import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const [product, setProduct] = useState(0);
  const [abnormal, setAbnormal] = useState(10);
  const classes = useStyles();

  useEffect(() => {
      setTimeout(() => {
          setProduct(product + 27);
      }, 3000);
      setTimeout(() => {
          setAbnormal(Math.round(Math.random() * 10 + 1));
      }, 3000);
  }, [product, abnormal])

  return (
    <React.Fragment>
      <Title>일일 현황</Title>
      <Typography component="p" variant="h4">
          생산량 : {product}
      </Typography>
      <Typography component="p" variant="h4">
          불량율 : {abnormal}%
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {new Date().getFullYear()} - {new Date().getMonth() + 1} - {new Date().getDay() - 1}
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
      </div>
    </React.Fragment>
  );
}