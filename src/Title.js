import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography component="h2" variant="h3" color="#" gutterBottom align="center">
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};