import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const UserHome = () => {

       const { user } = useAuth()

       return (
              <div>
                     <Helmet>
                            <title>Admin Home</title>
                     </Helmet>
                     <h2 className='text-2xl font-cinzel mt-5 ml-5'>Hi, Welcome {user?.displayName ? user?.displayName : 'Back!'}</h2>
              </div>
       );
};

export default UserHome;