import { Component } from 'react'; //class component
import './search-box.styles.css';
class SearchBox extends Component {
    render(){
        return(
            <input type='search'
                //className={this.props.className}
                className={`search-box ${this.props.className}`}
                placeholder={this.props.placeholder} 
                onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox; // export CardList by default