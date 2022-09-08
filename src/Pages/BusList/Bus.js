import React from 'react';

const Bus = ({row}) => {
    return (
        <tr className='hover'>
            <td>{row._id}</td>
            <td>{row.driver}</td>
            <td>{row.helper}</td>
            <td>{row.upcoming_maintenance}</td>
            <td>{row.start_year}</td>
        </tr>
    );
};

export default Bus;