import React from 'react';
import './List.css';

function List(props){
    return (
        <table border="1">
          <tbody>
            {props.data.map((item, index) => {
              return (
                <tr key={item}>
                    <td className="list-value">
                      {item}
                    </td>

                    <td>
                        <button  
                            className="btn-delete"
                            type="button" 
                            onClick={() => props.onButtonClick(index)}
                        >
                        Delete
                        </button>
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    )
}

export default List;