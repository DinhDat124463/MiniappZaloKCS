// import React, { useState } from 'react';
// import { authorize } from 'zmp-sdk/apis';

// const CapQuyen: React.FC = () => {
//   const [authorizationData, setAuthorizationData] = useState<any>(null); // State to hold authorization data

//   const authorize2 = async () => {
//     try {
//       const data = await authorize({
//         scopes: ["scope.userLocation", "scope.userPhonenumber"],
//       });
//       setAuthorizationData(data); // Set authorization data to state

//     } catch (error) {
//       // Handle API call failure
//       console.log(error);
//     }
//   };

//   return (

//     <div>
//       <h2>Authorization Data:</h2>
//       <pre>{JSON.stringify(authorizationData, null, 2)}</pre>

//     </div>
//   );
// };

// export default CapQuyen;
