import React from 'react';
import LoginAdmin from '../../components/LoginAdmin';
import Passwords from '../../passwords';

const AdminPanel = () => {
    return (
        <div>
            <LoginAdmin data={Passwords} />
        </div>
    )
}

export default AdminPanel;