class IndecisionApp extends React.Component
{
  render(){
    const title = 'Indecision';
    const subtitle = 'App';
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header subtitle={subtitle} title={title} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component
{
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component
{
  handlePick(){
    alert('handle pick');
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should I do</button>
      </div>
    )
  }
}

class Options extends React.Component
{
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    console.log(this.props.options);
  }
  render(){
    return (
      <div>
        <p>{this.props.options.length}</p>
        <button onClick={this.handleRemoveAll}>remove all</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class AddOptions extends React.Component
{
  handleAppOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option){
      alert(option);
    }
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAppOption}>
          <input type="text" name="option" />
          <button type="submit">Add option</button>
        </form>
        <p>Add Options here</p>
      </div>
    )
  }
}

class Option extends React.Component
{
  render(){
    return (
      <div>
        <p>Option: {this.props.optionText}</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));