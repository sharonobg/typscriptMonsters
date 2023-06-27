import { Component } from 'react'; //class component

class CardList extends Component {
    render() {
        console.log(this.props);
        
        return (
        <div>
            <h1>Hello I'm the CardList Component Value</h1>
            <p>here are my details</p>
        </div>
        )
    }
}
export default CardList; // export CardList by default
