import React from "react";

import { Item} from "../App";

const ListItem : React.FC<{ item : Item}>  = React.memo( (props) => {
    const { item } = props
    console.log('test2')
        return <li>{item.name}</li>;
    }
);

export default ListItem;
