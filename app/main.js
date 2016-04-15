import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

let CommentBox = React.createClass({
  render: function(){
    return (
      <div className='commentBox'>
        <h1>Juns CommentBox 1213</h1>
      </div>
    )
  },
})

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
