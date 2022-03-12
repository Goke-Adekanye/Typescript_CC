import React from 'react';
import { IState as IProps } from '../App';

// interface IProps {
//     people: IState['people']
// }


const List: React.FC<IProps> = ({people}) => {
    const renderedList = () :JSX.Element[] => {
    return people.map(person => {
        return (
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url} alt='human'/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
        )
    })
    }
        return <ul>{renderedList()}</ul>
}

export default List