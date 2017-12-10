class IndecisionApp extends React.Component
{
  constructor(props){
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }
  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option){
    if (!option){
      return 'enter valid value';
    } else if(this.state.options.indexOf(option) > -1){
      return 'already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }
  render(){
    const title = 'Indecision';
    const subtitle = 'App';

    return (
      <div>
        <Header subtitle={subtitle} title={title} />
        <Action 
        hasOptions={this.state.options.length} 
        handlePick={this.handlePick}
        />

        <Options 
        options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOptions handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

const Action = (props) => {
  return (
    <div>
      <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      >
      What should I do
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <p>{props.options.length}</p>
      <button onClick={props.handleDeleteOptions}>remove all</button>
      {
        props.options.map((option) => <Option key={option} optionText={option} />)
      }
    </div>
  );
}

class AddOptions extends React.Component
{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {error};
    })
  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit">Add option</button>
        </form>
        <p>Add Options here</p>
      </div>
    )
  }
}

const Option = (props) => {
  return (
    <div>
      <p>Option: {props.optionText}</p>
    </div>
  );
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));