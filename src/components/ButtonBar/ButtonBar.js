import React from "react";
import "./ButtonBar.css"

/*export default function ButtonBar(props) {
  return (
      <div className="buttonBar">
        <button onClick={props.bear}>Bear me</button>
        <button onClick={props.penguin}>Peng, Peng, Penguin</button>
        <button onClick={props.fox}>What the fox</button>
      </div>
  );
}*/

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupOrientation(props) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical outlined primary button group"
        >
          <Button onClick={props.bear}>Bear me</Button>
          <Button onClick={props.penguin}>Peng, Peng, Penguin</Button>
          <Button onClick={props.fox}>What the fox</Button>
        </ButtonGroup>
      </div>
  );
}
