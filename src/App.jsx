import './App.css';
import ChatEntry from './components/ChatEntry.jsx';
import ChatLog from './components/ChatLog.jsx';
import messages from './data/messages.json';

const App = () => {
  console.log(messages);

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

        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
