import React, { useState, useEffect } from 'react';
import { authorize } from 'zmp-sdk/apis';

const CapQuyen: React.FC = () => {
  const [authorizationData, setAuthorizationData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await authorize({
          scopes: ["scope.userPhonenumber"],
        });
        setAuthorizationData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Gọi hàm fetchData khi component được mount lần đầu tiên
  }, []); // Truyền mảng rỗng để đảm bảo useEffect chỉ chạy một lần

  // Console.log trong useEffect để theo dõi sự thay đổi của authorizationData
  useEffect(() => {
    console.log(authorizationData);
  }, [authorizationData]);

  return null;
};

export default CapQuyen;
