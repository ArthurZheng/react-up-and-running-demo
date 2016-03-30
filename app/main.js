import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import CommentBox from './views/comment_box';

ReactDOM.render(
  <CommentBox url="./comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
