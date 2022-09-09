import React from 'react';

const History = ({row}) => {
    return (
        <tr className='hover'>
            <td>{row._id}</td>
            <td>{row.Person}</td>
            <td>{row.email}</td>
            <td>{row.date}</td>
            <td>{row.dept}</td>
        </tr>
    );
};

export default History;