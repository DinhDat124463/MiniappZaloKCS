import React, { useEffect } from "react";
import { followOA } from "zmp-sdk/apis";

const FollowOAa: React.FC = () => {
  useEffect(() => {
    const follow = async () => {
      try {
        await followOA({
          id: "607679010723781211"
        });
      } catch (error) {
        // Handle API call failure
        console.log(error);
      }
    };

    follow(); // Call follow function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return null;
};

export default FollowOAa;
