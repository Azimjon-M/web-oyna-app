import React from 'react';
import LoginAdmin from '../../components/LoginAdmin';

const AdminPanel = () => {

    const user = {id: "12345", password: "12345"}

    return (
        <div>
            <LoginAdmin data={user} />
        </div>
    )
}

export default AdminPanel;