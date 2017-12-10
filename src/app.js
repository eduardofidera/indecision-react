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
  render(){
    return (
      <div>
        <button>What should I do</button>
      </div>
    )
  }
}

class Options extends React.Component
{
  render(){
    return (
      <div>
        <p>{this.props.options.length}</p>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class AddOptions extends React.Component
{
  render(){
    return (
      <div>
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