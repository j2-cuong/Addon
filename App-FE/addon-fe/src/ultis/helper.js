export function isNumeric(s) {
  return !isNaN(s - parseFloat(s));
}

export const isEmpty = (value) => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.length === 0)
  );
};

export const formatPhoneNumber = (value) => {
  const phoneNumber = value + "";
  const list = phoneNumber.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
};

export const replaceVietnameseChar = (str) => {
  var unicodeMap = {
    a: "á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ",
    d: "đ",
    e: "é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ",
    i: "í|ì|ỉ|ĩ|ị",
    o: "ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ",
    u: "ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự",
    y: "ý|ỳ|ỷ|ỹ|ỵ",
  };
  for (const key in unicodeMap) {
    const value = unicodeMap[key];
    const re = new RegExp(value, "gi");
    str = str.replace(re, key);
  }
  return str;
};

export const convertStringToNumber = (value) => {
  return (
    typeof value === "string" &&
    typeof Number(value) === "number" &&
    !isNaN(value) &&
    Number(value)
  );
};

export const formatPrice = (value, round = 2) => {
  return value.toFixed(round).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const formatPriceVND = (value) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    value
  );

export const checkImageFile = (data) => {
  for (const key in data) {
    const file = data[key];
    if (
      file.type !== "image/png" &&
      file.type !== "image/gif" &&
      file.type !== "image/jpeg"
    ) {
      return false;
    }
  }
  return true;
};

// export const deleteEmptyPropertiesObj = (obj, keyExist = null) => {
//   Object.keys(obj).forEach((k) => {
//     if (keyExist) {
//       if (!obj[k] && k !== keyExist) delete obj[k];
//     } else if (!obj[k]) delete obj[k];
//   });
// };
