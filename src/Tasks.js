import React from 'react';

function Tasks(props){
    const CompliteBtn = () => (
        <div>
            {!props.tasks.done ? <button onClick={props.compliteTask} className="btn">Completed</button> 
            : <button onClick={props.removeTask} className="btn btn-remove">Remove</button>}
        </div>
    )

    return (
        <div className="todo__task" id={props.tasks.id}>
            {props.tasks.text}
            <CompliteBtn />
        </div>
    );
}

export default Tasks;