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
  {name: 'A Nice Book', author: 'J.R.R Rowling', language: 'English', year: 1943, sold: '140 million'},
  {name: 'Best Seller Harry Porter', author: 'Jun Zheng', language: 'French', year: 1932, sold: '2000 million'},
  {name: 'Anroid And Then there was none', author: 'Saint John', language: 'Spanish', year: 9233, sold: '923 billion'},
  {name: 'Awesome iOS App Development', author: 'John Doe', language: 'Italian', year: 19983, sold: '1583 million'},
  {name: 'Far Far Away House', author: 'Nicole Best', language: 'Chinese', year: 2007, sold: '8583 million'}
    ];


ReactDOM.render(
  <FancyTable headers={headers} book_list={books}/>,
  document.getElementById('content')
);
