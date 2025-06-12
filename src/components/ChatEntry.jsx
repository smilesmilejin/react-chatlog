import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.jsx';


const ChatEntry = (props) => {
  const likeButtonClicked = () => {
    props.onLikeToggle(props.id);
  };


  const getSenderType = () => {
    if (!props.twoPeople) {
      return '';
    } else if (props.twoPeople.length === 2) {
      if (props.sender === props.twoPeople[0]) {
        return 'chat-entry local';
      } else if (props.sender === props.twoPeople[1]) {
        return 'chat-entry remote';
      }
    } else if (props.twoPeople.length === 1) {
      if (props.sender === props.twoPeople[0]) {
        return 'chat-entry local';
      }
    }
    return '';
  };


  const setColor = () => {
    if (!props.colorChoice || !props.twoPeople) return '';

    if (props.twoPeople.length === 2) {
      if (props.sender === props.twoPeople[0]) {
        return props.colorChoice.vColor;
      } else if (props.sender === props.twoPeople[1]) {
        return props.colorChoice.eColor;
      }
    } else if (props.twoPeople.length === 1) {
      return props.colorChoice.vColor;
    }

    return '';
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
