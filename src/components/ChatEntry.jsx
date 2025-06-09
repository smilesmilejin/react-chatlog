import './ChatEntry.css';
import TimeStamp from './TimeStamp.jsx';

const ChatEntry = (props) => {
  // Wave 1 try
  // const m = {
  //   'id': 1,
  //   'sender':'Vladimir',
  //   'body':'why are you arguing with me',
  //   'timeStamp':'2018-05-29T22:49:06+00:00',
  //   'liked': false
  // };

  //   return (
  //   <div className="chat-entry local">
  //     {/* <h2 className="entry-name">Replace with name of sender</h2> */}
  //     <h2 className="entry-name">{m.sender}</h2>
  //     <section className="entry-bubble">
  //       {/* <p>Replace with body of ChatEntry</p>
  //       <p className="entry-time">Replace with TimeStamp component</p> */}

  //       <p>{m.body}</p>
  //       <p className="entry-time"><TimeStamp time={m.timeStamp}></TimeStamp></p>

  //       <button className="like">🤍</button>
  //     </section>
  //   </div>
  // );

  return (
    <div className="chat-entry local">
      {/* <h2 className="entry-name">Replace with name of sender</h2> */}
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        {/* <p>Replace with body of ChatEntry</p>
        <p className="entry-time">Replace with TimeStamp component</p> */}

        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>

        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
};

export default ChatEntry;
