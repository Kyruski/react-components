var GroceryList = () => (
  <GroceryListItem item={['Banana', 'Apple', 'Carrot']} />
);

var GroceryListItem = (props) => (
  <ul>
    <li>{props.item[0]}</li>
    <li>{props.item[1]}</li>
    <li>{props.item[2]}</li>
  </ul>
);

// var Banana = () => (
//   <li>Banana</li>
// );

// var Apple = () => (
//   <li>Apple</li>
// );

// TODO
ReactDOM.render(<GroceryList />, document.getElementById('app'));