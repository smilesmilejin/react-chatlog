import './ChatLog.css';
import ChatEntry from './ChatEntry.jsx';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatMessages = props.entries.map((message) => {
    return (
      <li key={message.id}>
        <ChatEntry id={message.id} sender={message.sender} body={message.body}
          timeStamp={message.timeStamp} liked={message.liked}
          onLikeToggle={props.onMessageLikeToggle} colorChoice={props.colorChoice}>
        </ChatEntry>
      </li>
    );
  });

  return (
    <ul>
      {chatMessages}
    </ul>
  );
};

ChatLog.propTypes = {
  id:PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatLog;