import React from 'react';
import './ModalContent.css';

const ModalContent=(props)=>{
    return (
        <div className="modalContent">
        <h1>{`${props.real_name}'s Activity`}</h1>
        <table className="tableContent">
            <tr>
                <th>Start Time</th>
                <th>End Time</th>
            </tr>
            {props.activity_periods.map((time)=>{
              return <tr>
                  <td>
                      {time.start_time}
                  </td>
                  <td>
                      {time.end_time}
                  </td>
              </tr>
            })}
        </table>
      </div>
    )

}

export default ModalContent;