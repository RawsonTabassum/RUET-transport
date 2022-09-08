import React from 'react';

const Employee = ({row}) => {
    return (
        <tr className='hover'>
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.role}</td>
            <td>{row.phone}</td>
            <td>{row.address}</td> 
            <td>{row.joined}</td> 
        </tr>
    );
};

export default Employee;