import React, { useEffect, useState } from 'react';
import { getPhoneNumber, getAccessToken } from 'zmp-sdk/apis';
import { require} from 'zmp-ui';
getAccessToken({
  success: (accessToken) => {
    // xử lý khi gọi api thành công
  },
  fail: (error) => {
    // xử lý khi gọi api thất bại
    console.log(error);
  }
});

const request = require("request");

const endpoint = "https://graph.zalo.me/v2.0/me/info";
const userAccessToken = "your_user_access_token";
const token = "your_token";
const secretKey = "your_zalo_app_secret_key";

const options = {
  url: endpoint,
  headers: {
    access_token: userAccessToken,
    code: token,
    secret_key: secretKey,
  },
};

request(options, (error, response, body) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Response Code:", response.statusCode);
    console.log("Response Body:", body);
  }
});
const PhoneNumberComponent: React.FC = () => {
  getPhoneNumber({
    success: async (data) => {
      let { token } = data;
    },
    fail: (error) => {

      console.log(error);
    },
  });

  return null;
};

export default PhoneNumberComponent;
