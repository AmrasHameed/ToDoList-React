
const Finished = (props) => {
    let toDos = props.data;
 
    return(
        <div className="finished-tasks">
            {toDos.map((obj) => {
                if (obj.status) {
                    return (
                        <div key={obj.id} className="task">
                            <h2 className="finished-task">
                                <span className="green-check">
                                    <i className="fas fa-check-circle"></i>
                                </span>
                                {obj.text}
                            </h2>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}

export default Finished
