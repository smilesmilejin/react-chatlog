import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.jsx';


const ChatEntry = (props) => {
  const likeButtonClicked = () => {
    props.onLikeToggle(props.id);
  };


  // const getSenderType = () => {
  //   if (!props.twoPeople) {
  //     return '';
  //   } else if (props.twoPeople.length === 2) {
  //     if (props.sender === props.twoPeople[0]) {
  //       return 'chat-entry local';
  //     } else if (props.sender === props.twoPeople[1]) {
  //       return 'chat-entry remote';
  //     }
  //   } else if (props.twoPeople.length === 1) {
  //     if (props.sender === props.twoPeople[0]) {
  //       return 'chat-entry local';
  //     }
  //   }
  //   return '';
  // };

  // use entryClassName instead of getSenderTyep to handle muptiple people.
  const entryClassName = (() => {
    // Check if twoPeople array exists and has at least one member
    if (!props.twoPeople || props.twoPeople.length === 0) {
      // No participants info, so no class can be assigned
      return '';
    }

    // If sender matches the first person in the array, classify as 'local'
    if (props.sender === props.twoPeople[0]) {
      return 'local';
    }

    // If sender is NOT the first person, treat as 'remote' regardless of matching second person or not
    return 'remote';
  });


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
    // <div className={getSenderType()}>
    <li className={`chat-entry ${entryClassName()}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className = {setColor()}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={likeButtonClicked}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </li>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func,
  twoPeople:PropTypes.arrayOf(PropTypes.string),
  colorChoice: PropTypes.shape({
    vColor: PropTypes.string,
    eColor: PropTypes.string,
  }),
};

export default ChatEntry;
