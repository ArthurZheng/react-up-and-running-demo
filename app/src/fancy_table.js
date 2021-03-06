import React from 'react';

export default React.createClass({
  displayName: 'Fancy-Table',

  propTypes: {
      headers: React.PropTypes.arrayOf(
        React.PropTypes.string
      ),
      books: React.PropTypes.arrayOf(
        React.PropTypes.string
      )
  },

  getInitialState: function(){
    return {
      book_list: this.props.book_list,
      sortby: null,
      descending: false
    };
  },

  _sort: function(event){
    console.log('_sort is triggered');
      let column_index = event.target.cellIndex; // get the index of which cell/column of the header which is clicked;
      console.log('column is ', column_index);
      let book_list_copy = this.state.book_list.slice(); // a copy of the books array;
      console.log('book_list_copy is ', book_list_copy);

      // descending is true if the index of the new column is the same as the currently sortby column and the sorting
      // is not already descending;
      let descending = this.state.sortby === column_index && !this.state.descending;
      // sor the book list
      switch(column_index){
        case 0:
          book_list_copy = book_list_copy.sort(function(a, b){
              return descending
              ? a.name < b.name
              : a.name > b.name
          });
          break;
        case 1:
          book_list_copy = book_list_copy.sort(function(a, b){
              return descending
              ? a.author < b.author
              : a.author > b.author
          });
          break;
        case 2:
          book_list_copy = book_list_copy.sort(function(a, b){
              return descending
              ? a.language < b.language
              : a.language > b.language
          });
          break;
        case 3:
          book_list_copy = book_list_copy.sort(function(a, b){
              return descending
              ? a.year > b.year
              : a.year < b.year
          });
          break;
        case 4:
          book_list_copy = book_list_copy.sort(function(a, b){
              return descending
              ? a.sold < b.sold
              : a.sold > b.sold
          });
          break;
      }

      // after sorting, set the state with the new, sorted books;
      this.setState(
        {
          book_list: book_list_copy,
          sortby: column_index,
          descending: descending
        }
      );
      console.log('sorted book_list: ', book_list_copy);
  },

  componentWillMount: function(){
   this.setState({book_list: this.state.book_list});
 },

  render: function(){
    let tableHeadNodes = this.props.headers.map(function(title, idx){
        // if(this.state.sortby === idx){
        //   title.arrow = this.state.descending ? '\u2191' : '\u2193'
        // }
        return (
          <th key={idx}>{title.name}</th>
        )
      }.bind(this));

    let tableBodyNodes = this.state.book_list.map(function(book, idx){
        return (
          <tr key={idx}>
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
        <thead onClick={this._sort}>
            {tableHeadNodes}
        </thead>
        <tbody>
          {tableBodyNodes}
        </tbody>
      </table>
    )
  }
});
