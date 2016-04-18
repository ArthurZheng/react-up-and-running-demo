import '../public/css/style.css';

import ReactDOM from 'react-dom';
import React from 'react';

import FancyTable from './src/fancy_table';

let headers = [
  {name: 'book'},
  {name: 'author'},
  {name: 'language'},
  {name: 'published'},
  {name: 'sales'}
]

let books=[
  {name: 'The Lord of the Rings', author: 'J.R.R Rowling', language: 'English', year: 1943, sold: '140 million'},
  {name: 'Harry Porter', author: 'Jun Zheng', language: 'French', year: 1932, sold: '2000 million'},
  {name: 'And Then there was none', author: 'Saint John', language: 'Spanish', year: 9233, sold: '923 thou'}
    ];


ReactDOM.render(
  <FancyTable headers={headers} books={books}/>,
  document.getElementById('content')
);
