import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.jsx';
// import { useState } from 'react';

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

  // // Wave 3
  // const[isLike, setIsLike] = useState(false);

  // const toggleLike = () => {
  //   setIsLike(!isLike);
  //   // This will log the OLD value!
  //   // React state updates are asynchronous, so the new value is not immediately available after calling setIsLike.
  //   // console.log('### isLike Value', isLike);
  // };

  // {/* Wave 3: Method 2 */}
  // Method 2
  // const hearts = {
  //   'false':'🤍',
  //   'true':'❤️',
  // };
  // const changeLike = () => {
  //   console.log('#####Clicked like');
  //   console.log('isLike is now: ', isLike);
  //   toggleLike();
  //   console.log('isLike after tooglelike is now: ', isLike);
  // };

  const likeButtonClicked = () => {
    props.onLikeToggle(props.id);
  };


  // Optional local vs remote
  const getSenderType = () => {
    if (props.sender === 'Vladimir') {
      return 'chat-entry local';
    } else if (props.sender === 'Estragon') {
      return 'chat-entry remote';
    }
  };

  return (
    // {/* Optional */}
    <div className={getSenderType()}>
    {/* <div className="chat-entry local"> */}
    {/* Optional */}
    {/* <div className={getSenderType()}> */}
      {/* <div className="chat-entry remote "> */}
      {/* <h2 className="entry-name">Replace with name of sender</h2> */}
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        {/* <p>Replace with body of ChatEntry</p>
        <p className="entry-time">Replace with TimeStamp component</p> */}
        {/* <p>{props.id}</p> */}
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        {/* <button className="like">🤍</button> */}

        {/* Wave 3 */}
        {/* Method 1 */}
        {/* <button className="like" onClick={toggleLike}>{isLike ? '❤️' : '🤍'}</button> */}
        {/* Wave 3: Method 2 */}
        {/* This also works */}
        {/* <button className="like" onClick={changeLike}>{hearts[isLike]}</button> */}


        <button className="like" onClick={likeButtonClicked}>{props.liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id:PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
