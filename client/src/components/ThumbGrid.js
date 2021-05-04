import React from 'react';
import './ThumbGrid.css';

function ThumbGrid(props){

    return (
        <table className="TodoList">
        <thead>
            <tr>
                <th>Tasks</th>
            </tr>
        </thead>
        <tbody>
            {
                props.tasks.map(p => (
                    <tr key={p.id}>
                       <td>{p.text}</td>
                       <td>{p.description}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    )
}

export default ThumbGrid;