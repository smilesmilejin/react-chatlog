import './ChatLog.css';
import ChatEntry from './ChatEntry.jsx';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatMessages = props.entries.map((message) => {
    return (
      // <li key={message.id}>
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        onLikeToggle={props.onMessageLikeToggle}
        colorChoice={props.colorChoice}
        twoPeople={props.twoPeople}>
      </ChatEntry>
      // </li>
    );
  });

  return (
    <ul>
      {chatMessages}
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onMessageLikeToggle: PropTypes.func,
  twoPeople:PropTypes.arrayOf(PropTypes.string),
  colorChoice: PropTypes.shape({
    vColor: PropTypes.string,
    eColor: PropTypes.string,
  }),
};

export default ChatLog;