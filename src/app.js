class IndecisionApp extends React.Component
{
  render(){
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component
{
  render(){
    return (
      <div>
        <h1>Indecision</h1>
        <h2>App</h2>
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
        <p>Options here</p>
        <Option />
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
        <p>Option will be here</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));