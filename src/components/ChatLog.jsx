import './ChatLog.css';
import ChatEntry from './ChatEntry.jsx';

const ChatLog = (props) => {
  console.log('########### ChatLog');
  console.log(props.entries);
  // 0
  // :
  // {id: 1, sender: 'Vladimir', body: 'why are you arguing with me', timeStamp: '2018-05-29T22:49:06+00:00', liked: false}
  // 1
  // :
  // {id: 2, sender: 'Estragon', body: 'Because you are wrong.', timeStamp: '2018-05-29T22:49:33+00:00', liked: false}
  // 2
  // :
  // {id: 3, sender: 'Vladimir', body: 'because I am what', timeStamp: '2018-05-29T22:50:22+00:00', liked: false}
  // 3
  // : 
  // {id: 4, sender: 'Estragon', body: 'A robot.', timeStamp: '2018-05-29T22:52:21+00:00', liked: false}
  
  // Optional
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

export default ChatLog;