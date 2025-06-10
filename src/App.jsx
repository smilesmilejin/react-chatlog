import './App.css';
import ChatEntry from './components/ChatEntry.jsx';
import ChatLog from './components/ChatLog.jsx';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  console.log(messages);
  // Wave 3
  const [messageData, setMessageData] = useState(messages);

  const toggleMessageLike = (messageId) => {
    const messages = messageData.map(message => {
      if (message.id === messageId) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    });

    setMessageData(messages);
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry></ChatEntry> */}
        {/* <ChatEntry
          id={7}
          sender="Joe Biden"
          body="Get out by 8am.  I'll count the silverware"
          timeStamp="2018-05-18T22:12:03Z"
          liked={false}
        /> */}

        <ChatLog entries={messageData} onMessageLikeToggle ={toggleMessageLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
