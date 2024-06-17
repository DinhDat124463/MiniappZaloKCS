import React from 'react';
import { openPermissionSetting } from 'zmp-sdk/apis';

const Option_user: React.FC = () => {
  const handlePermissionSetting = async () => {
    try {
      await openPermissionSetting({});
    } catch (error) {

      console.log(error);
    }
  };

  handlePermissionSetting(); 

  return null; 
};

export default Option_user;
