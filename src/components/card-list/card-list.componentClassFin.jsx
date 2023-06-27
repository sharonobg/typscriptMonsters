import { Component } from 'react'; //class component
import Card from '../card/card.component';
import './card-list.styles.css';

//components re-render(updates dom) undr 2 conditions: when set state gets called or props are updated
class CardList extends Component {
    render() {
        const {monsters} = this.props;
        return (
             <div className='card-list'>
                {monsters.map(monster => {
                    return (
                        <Card monster = {monster} key={monster.id}/>
                    );
                } 
                )//monster map
            }
        </div>
            
            
        )//return
    }
    
}
export default CardList; // export CardList by default
