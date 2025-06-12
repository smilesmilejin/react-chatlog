import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.jsx';
// import { useState } from 'react';

const ChatEntry = (props) => {
  const likeButtonClicked = () => {
    props.onLikeToggle(props.id);
  };


  const getSenderType = () => {
    if (props.sender === 'Vladimir') {
      return 'chat-entry local';
    } else if (props.sender === 'Estragon') {
      return 'chat-entry remote';
    }
  };

  const setColor = () => {
    if (!props.colorChoice) return '';
    if (props.sender === 'Vladimir') {
      return props.colorChoice.vColor;
    } else if (props.sender === 'Estragon') {
      return props.colorChoice.eColor;
    }
  };

  return (
    <div className={getSenderType()}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className = {setColor()}>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className="like" onClick={likeButtonClicked}>{props.liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
