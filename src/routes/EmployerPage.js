import React from 'react';
import EmployerPageDets from '../components/EmployerPageDets';
import NavbarEmployer from '../components/NavbarEmployer';

const EmployerPage = () => {
    return (
        <div>
            <NavbarEmployer />
            <EmployerPageDets />
        </div>
    )
}

export default EmployerPage;