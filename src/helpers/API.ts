/* eslint-disable @typescript-eslint/no-explicit-any */
const actionSend = (data: Buffer) => {
  if (data.toString("hex").slice(8, 10) === "ac") {
    return Buffer.from(hexStringToByte(fakeAlogin(data)));
  }

  return Buffer.from(hexStringToByte(data.toString("hex")));
};

const hexStringToByte = (s: string) => {
  const array = new Array(Math.round(s.length / 2) - 1 + 1);
  for (let i = 0; i < s.length; i += 2) {
    array[Math.round(i / 2)] = parseInt(s.substring(i, i + 2), 16);
  }
  return array;
};

const fakeAlogin = (inputString: Buffer) => {
  return inputString
    .toString("hex")
    .replace("adadadadaead", "adaddbc30bad")
    .replace("adaddbc317ad", "adaddbc30bad");
};

const compareString = (
  data: Buffer,
  start: number,
  end: number,
  stringCompare: string
) => {
  return data.toString("hex").slice(start, end) === stringCompare;
};

function xorWithAD(hexString: string): string {
  let result = "";
  for (let i = 0; i < hexString.length; i += 2) {
    const hexByte = hexString.substr(i, 2);
    const decimalValue = parseInt(hexByte, 16);
    const xoredValue = decimalValue ^ 0xad;
    const xoredHexValue = xoredValue.toString(16).padStart(2, "0");
    result += xoredHexValue;
  }
  return result;
}

function hexToInt32(num: string): number {
  const array = hexStringToByte(num);
  let result = 0;
  switch (array.length) {
    case 1:
      result = parseInt(byteToHexstring(new Uint8Array([array[0]])), 16);
      break;
    case 2:
      result = parseInt(
        byteToHexstring(new Uint8Array([array[1], array[0]])),
        16
      );
      break;
    case 4:
      result = parseInt(
        byteToHexstring(
          new Uint8Array([array[3], array[2], array[1], array[0]])
        ),
        16
      );
      break;
  }
  return result;
}

function byteToHexstring(bytes: Uint8Array | number[]): string {
  let text = "";
  for (let i = 0; i < bytes.length; i++) {
    const hex = bytes[i].toString(16);
    text += (hex.length === 1 ? "0" : "") + hex;
  }
  return text;
}

function findIDCharFromData(data: Buffer) {
  return hexToInt32(xorWithAD(data.toString("hex").slice(12, 16)));
}

function convertElement(data: number | null) {
  const conversionMap = {
    Địa: 1,
    Thủy: 2,
    Hỏa: 3,
    Phong: 4,
    Tâm: 5,
  };

  for (const [key, value] of Object.entries(conversionMap)) {
    if (value === data) {
      return key;
    }
  }
  return "";
}

export {
  actionSend,
  hexStringToByte,
  fakeAlogin,
  compareString,
  xorWithAD,
  hexToInt32,
  findIDCharFromData,
  convertElement,
};
