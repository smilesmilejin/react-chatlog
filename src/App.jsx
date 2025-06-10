import './App.css';
import ChatEntry from './components/ChatEntry.jsx';
import ChatLog from './components/ChatLog.jsx';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  console.log(messages);
  // Optional: Color Choice
  const [vladimircolor, setVladimirColor] = useState('green');
  const [estragoncolor, setEstragonColor] = useState('blue');

  // Optional Header Title
  const twoPeople = [];

  for (let message of messages) {
    if (!twoPeople.includes(message.sender)) {
      twoPeople.push(message.sender);
    }
    if (twoPeople.length === 2) {
      break;
    }
  };

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

  // calculate number of hearts
  const heartNumbers = () => {
    let count = 0;
    for (const message of messageData) {
      if (message.liked) {
        count += 1;
      }
    };

    return count;
  };

  // Optional
  const handleVladimirColorButtonClicked= (color) => {
    setVladimirColor(color);
  };

  const handleEstragonColorButtonClicked= (color) => {
    setEstragonColor(color);
  };

  const colorChoice = {'vColor': vladimircolor,'eColor':estragoncolor};

  return (
    <div id="App">
      <header>
        {/* <h1>Application title</h1> */}
        <h1>Chat between <person className={vladimircolor}>{twoPeople[0]}</person> and
          <person className={estragoncolor}> {twoPeople[1]}</person></h1>
        {/* <h2 id='heartNumber'>{heartNumbers()} ❤️s</h2> */}
        {/* <section id='heartNumber'>{heartNumbers()} ❤️s</section> */}

        {/* Optional ColorChoice */}
        <section className = 'colorChoice'>
          <local>
            {/* <p id='Vladimir' className={vladimircolor}>Vladimir's color:</p> */}
            <p id='Vladimir' className={vladimircolor}>{twoPeople[0]}'s color:</p>
            <button onClick={() => handleVladimirColorButtonClicked('red')}>🔴</button>
            <button onClick={() => handleVladimirColorButtonClicked('orange')} >🟠</button>
            <button onClick={() => handleVladimirColorButtonClicked('yellow')}>🟡</button>
            <button onClick={() => handleVladimirColorButtonClicked('green')}>🟢</button>
            <button onClick={() => handleVladimirColorButtonClicked('blue')}>🔵</button>
            <button onClick={() => handleVladimirColorButtonClicked('purple')}>🟣</button>
          </local>
          <h2 id='heartNumber'>{heartNumbers()} ❤️s</h2>
          <remote>
            {/* <p id='Estragon' className={estragoncolor}>Estragon's color:</p> */}
            <p id='Estragon' className={estragoncolor}>{twoPeople[1]}'s color:</p>
            <button onClick={() => handleEstragonColorButtonClicked('red')}>🔴</button>
            <button onClick={() => handleEstragonColorButtonClicked('orange')} >🟠</button>
            <button onClick={() => handleEstragonColorButtonClicked('yellow')}>🟡</button>
            <button onClick={() => handleEstragonColorButtonClicked('green')}>🟢</button>
            <button onClick={() => handleEstragonColorButtonClicked('blue')}>🔵</button>
            <button onClick={() => handleEstragonColorButtonClicked('purple')}>🟣</button>
          </remote>
        </section>
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

        <ChatLog entries={messageData} onMessageLikeToggle ={toggleMessageLike}
          colorChoice = {colorChoice}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
