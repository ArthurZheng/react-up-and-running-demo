import React from 'react';

export default React.createClass({
  displayName: 'Fancy-Table',

  getInitialState: function(){
    return { data: this.props.books };
  },
  render: function(){
    let tableHeadNodes = this.props.headers.map(function(title, idx){
        return (
          <th key={idx}>{title.name}</th>
        )
      });

    let tableBodyNodes = this.props.books.map(function(book, idx){
        return (
          <tr>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.language}</td>
            <td>{book.year}</td>
            <td>{book.sold}</td>
          </tr>
        )
    });
    return (
      <table>
        <thead>
            {tableHeadNodes}
        </thead>
        <tbody>
          {tableBodyNodes}
        </tbody>
      </table>
    )
  }
});
