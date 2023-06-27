import Card from '../card/card.component';
import './card-list.styles.css';

//components re-render(updates dom) undr 2 conditions: when set state gets called or props are updated
const CardList = ({monsters}) => (
    //return ( removing this - this is now an impliciti return since there is only the one jsx statement
         <div className='card-list'>
            {monsters.map(monster => {
                return <Card monster = {monster} key={monster.id}/>;
            })
            }
        </div> 
    //)//return
)
export default CardList; // export CardList by default
