import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

const {userid} = useParams();

    return (
        <div className='text-3xl bg-gray-500 text-center p-2 text-white'>User: {userid}</div>
    );
};

export default User;