import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../modules/MakeStylesMUI';

const Message = (props) => {
  const { typeMsg, msg, show } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(show);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity={typeMsg}
          action={(
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          )}
        >
          {msg}
        </Alert>
      </Collapse>
    </div>
  );
};

Message.propTypes = {
  typeMsg: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  msg: PropTypes.string,
  show: PropTypes.bool,
};

export default Message;
