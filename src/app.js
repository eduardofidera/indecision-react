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

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Action />
    <Options />
    <AddOptions />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));