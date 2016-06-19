var React = require('react');
var ListItem = require('./ListItem.jsx');
var ingredients = [
  {'id': 1, 'name': 'Ham'},
  {'id': 2, 'name': 'Cheese'},
  {'id': 3, 'name': 'Potatoes'}
];

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.name} />;
    });

    return (<ul>{listItems}</ul>);
  }
})

module.exports = List;
