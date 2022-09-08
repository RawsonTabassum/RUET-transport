import React from 'react';

const RoutineRow = ({row}) => {
    return (
        <tr className='hover'>
            <th>{row._id}</th>
            <td>{row.Driver}</td>
            <td>{row.Time}</td>
            <td>{row.Route}</td>
            <td>{row.For}</td>
        </tr>
    );
};

export default RoutineRow;