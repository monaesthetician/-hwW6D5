// challenge 1
const JSX = <h1>Hello JSX!</h1>

// challenge 2
const JSX = <div>
  <h1>Heading.</h1>
  <p>Paragraph</p>
 <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
</div>; 



// challenge 3
const JSX = (
  <div>
  {/*here is solution*/}
    <h1>This is a block of JSX</h1>
     <p>Here's a subtitle</p>
  </div>
);

// challenge 4
ReactDOM.render(JSX, document.getElementById("challenge-node"));

// challenge 5
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

// challenge 6

const JSX = (
  <div>
    
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
        
  </div>
);


// challenge 7

  const MyComponent = function() {
    return(
      <div> "I am a div, I contain some string of text"</div>
    );
  }
  
   
  

// challenge 8
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
       <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
};


// challenge 9
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}


// challenge 10
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* change code below this line */ }
      <TypesOfFruit/>
      { /* change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }
          <Fruits/>
        { /* change code above this line */ }
      </div>
    );
  }
};


// challenge 11
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};


// challenge 12class Fruits extends React.Component {
  class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          <NonCitrus />
          <Citrus />
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
  };

// challenge 13 
class TypesOfVehicles extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Vehicles:</h1>
        <Car />
        <Motorcycle />
      </div>
    );
  }
}
ReactDOM.render(<TypesOfVehicles />, document.getElementById("node-id"));


// challenge 14
class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
          <div id="challenge-node">
                 <h1>My First React Component!</h1>
          </div>
    );
  }
};
ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));


// challenge 15
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};

// challenge 16
const List = props => {
  return <p>{props.tasks.join(",")}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
      </div>
    );
  }
}
// challenge 17
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {
  items: 0
};


// challenge 18
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 10
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}/>
    { /* Change code above this line */ }
  }
};


// challenge 19 
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};


// challenge 20 
 



// challenge 21
// challenge 22
// challenge 23
// challenge 24
// challenge 25
// challenge 26
// challenge 27
// challenge 28
// challenge 29
// challenge 30
// challenge 31
// challenge 32
// challenge 33
// challenge 34
// challenge35
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
      if (nextProps.value % 2 == 0) {
        return true;
      }
      return false;
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
// challenge