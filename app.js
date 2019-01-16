

class GroceryListItem extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }
    
  onListItemClick() {
    this.setState ({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
     <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item[0]}</li>
    );
 } 
};

var GroceryList = (props) => (
  <ul>
    {props.items.map((item, index) => <GroceryListItem item={[item, index]}/>)}
  </ul>
);

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items ={['banana', 'apple']}/>
  </div>
)

// var Banana = () => (
  //   <li>Banana</li>
  // );
  
  // var Apple = () => (
    //   <li>Apple</li>
    // );
    
    // TODO
ReactDOM.render(<App />, document.getElementById('app'));