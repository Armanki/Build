import React from "react";

const urlParams = (url: any) => {
  const params: any = {};
  if (url.indexOf("?") !== -1) {
    const arr = url?.slice(1).split("&");
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i].split("=");
      params[el[0]] = el[1];
    }
  }
  return params;
};

export default urlParams;
