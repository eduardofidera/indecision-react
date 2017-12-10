class VisibilityToggle extends React.Component
{
    constructor(props){
        super(props);
        this.setToggle = this.setToggle.bind(this);
        this.state = {
            hide: 1
        };
    }
    setToggle(){
        this.setState((prevState) => {
            return {
                hide: !prevState.hide
            }
        })
    }
    render(){
        return (
            <div>
                <h1>VisibilityToggle</h1>
                <button onClick={this.setToggle}>{this.state.hide ? 'Show Details' : 'Hide Details'}</button>
                <p>{this.state.hide ? '' : 'These are some details'}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>These are some details</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'));
// };
// render();