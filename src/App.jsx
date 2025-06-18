import './App.css';
import ChatLog from './components/ChatLog.jsx';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [vladimircolor, setVladimirColor] = useState('green');
  const [estragoncolor, setEstragonColor] = useState('blue');

  const [messageData, setMessageData] = useState(messages);

  // const toggleMessageLike = (messageId) => {
  //   const messages = messageData.map(message => {
  //     if (message.id === messageId) {
  //       return {...message, liked: !message.liked};
  //     } else {
  //       return message;
  //     }
  //   });

  //   setMessageData(messages);
  // };

  //  we could replace the if with a ternary operator:
  const toggleMessageLike = (messageId) => {
    const messages = messageData.map((msg) => {
      return (messageId === msg.id) ? {...msg, liked: !msg.liked} : msg;
    });

    setMessageData(messages);
  };

  // This could be returned from a helper function
  // totalLikes is a variable that accumulates a value as we loop over each entry in chatEntries
  const heartNumbers = messageData.reduce((totalLikes, currentMessage) => {
    // If currentMessage.liked is true add 1 to totalLikes, else add 0
    return (totalLikes += currentMessage.liked ? 1 : 0);
  }, 0); // The 0 here sets the initial value of totalLikes to 0


  // const heartNumbers = () => {
  //   let count = 0;
  //   for (const message of messageData) {
  //     if (message.liked) {
  //       count += 1;
  //     }
  //   };

  //   return count;
  // };

  const handleVladimirColorButtonClicked= (color) => {
    setVladimirColor(color);
  };

  const handleEstragonColorButtonClicked= (color) => {
    setEstragonColor(color);
  };

  const colorChoice = {'vColor': vladimircolor,'eColor':estragoncolor};

  const twoPeople = [];

  for (let message of messageData) {
    if (!twoPeople.includes(message.sender)) {
      twoPeople.push(message.sender);
    }
    if (twoPeople.length === 2) {
      break;
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between <span className={vladimircolor}> {twoPeople[0]}
        </span> and <span className={estragoncolor}>{twoPeople[1]}</span></h1>

        <section className = 'colorChoice'>
          <section>
            <p id='Vladimir' className={vladimircolor}>{`${twoPeople[0]}'s color:`}</p>
            <button onClick={() => handleVladimirColorButtonClicked('red')}>🔴</button>
            <button onClick={() => handleVladimirColorButtonClicked('orange')} >🟠</button>
            <button onClick={() => handleVladimirColorButtonClicked('yellow')}>🟡</button>
            <button onClick={() => handleVladimirColorButtonClicked('green')}>🟢</button>
            <button onClick={() => handleVladimirColorButtonClicked('blue')}>🔵</button>
            <button onClick={() => handleVladimirColorButtonClicked('purple')}>🟣</button>
          </section>

          {/* <h2 id='heartNumber'>{heartNumbers()} ❤️s</h2> */}
          <h2 id='heartNumber'>{heartNumbers} ❤️s</h2>
          <section>
            <p id='Estragon' className={estragoncolor}>{`${twoPeople[1]}'s color:`}</p>
            <button onClick={() => handleEstragonColorButtonClicked('red')}>🔴</button>
            <button onClick={() => handleEstragonColorButtonClicked('orange')} >🟠</button>
            <button onClick={() => handleEstragonColorButtonClicked('yellow')}>🟡</button>
            <button onClick={() => handleEstragonColorButtonClicked('green')}>🟢</button>
            <button onClick={() => handleEstragonColorButtonClicked('blue')}>🔵</button>
            <button onClick={() => handleEstragonColorButtonClicked('purple')}>🟣</button>
          </section>
        </section>
      </header>

      <main>
        <ChatLog 
          entries={messageData}
          onMessageLikeToggle ={toggleMessageLike}
          colorChoice = {colorChoice}
          twoPeople={twoPeople}
        />

      </main>
    </div>
  );
};

export default App;
