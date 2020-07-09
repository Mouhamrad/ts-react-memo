import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import List from './components/List';
import "./styles.css";

export type Item = {
    id: string;
    name: string;
}

const DEFAULT_ITEMS: Item[] = [
    { id: "a", name: "lion" },
    { id: "b", name: "Thoma" }
];

const App = () => {
    const [users, setUsers] = useState(DEFAULT_ITEMS);
    const [text, setText] = useState<string>("");

    const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleAddUser = () => {
        setUsers(users.concat({ id: uuidv4(), name: text }));
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleText} />
            <button type="button" onClick={handleAddUser}>
                Add User
            </button>
            <List list={users} />
        </div>
    );
};

export default App;
