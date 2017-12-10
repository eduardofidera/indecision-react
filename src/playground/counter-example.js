class Counter extends React.Component
{
  constructor(props){
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.state = {
      count: props.count
    };
  }
  addOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  removeOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  resetAll(){
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render(){
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.removeOne}>-1</button>
        <button onClick={this.resetAll}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter/>, document.getElementById('app'));