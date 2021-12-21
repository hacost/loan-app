import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { typeMsg, msg, show } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(show);

  return (
    <div >
      <h1>Message</h1>
    </div>
  );
};

Message.propTypes = {
  typeMsg: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  msg: PropTypes.string,
  show: PropTypes.bool,
};

export default Message;
