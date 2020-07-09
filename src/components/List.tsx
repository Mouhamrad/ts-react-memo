import React from "react";

import ListItem from './ListItem';
import { Item } from '../App';

const List: React.FC<{ list: Item[] }> = React.memo(
    (props) => {
        const { list } = props;
        console.log('test')
        return (
            <ul>
                {list.map((item : { id: string; name: string }) => (
                    <ListItem key={item.id} item={item} />
                ))}
            </ul>
        );
    }
);

export default List;
