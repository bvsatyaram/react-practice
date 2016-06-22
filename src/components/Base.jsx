var React = require('react');

var Base = React.createClass({
  render: function() {
    return (
      <div>
        <header><h1>Header</h1></header>
        {this.props.children}
        <footer><h2>Footer</h2></footer>
      </div>
    );
  }
});

module.exports = Base;
