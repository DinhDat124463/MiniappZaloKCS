import React, { useState, useEffect } from "react"; 
import { followOA } from "zmp-sdk/apis";

const Notification: React.FC = () => {
  const [notification, setNotification] = useState<string>("");

  useEffect(() => {
    const follow = async () => {
      try {
        await followOA({
          id: "607679010723781211"
        });
        setNotification("Success"); 
      } catch (error) {

        console.error(error); 
        setNotification("Failed");
      }
    };
    follow();
  }, []);

  return (
    <div>
      {notification && <div>{notification}</div>}
    </div>
  );
};

export default Notification;
