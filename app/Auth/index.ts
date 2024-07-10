"use server";
import { cookies } from "next/headers";
import CryptoJS from "crypto-js";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

type LoginResponse = { [key: string]: string };
const secretKey = 'your-secret-key-1234567890123456'; 

// Check if the user is logged in by verifying the presence of the session cookie
export const isLoggedIn = (cookieName:string): boolean => {
  const sessionCookie = cookies().get(cookieName);
  return sessionCookie !== undefined;
};

// Get current user details by decrypting the session cookie
export const getCurrentUserDetail = (cookieName:string): any => {
  if (isLoggedIn(cookieName)) {
    return decryptData(cookieName);;
  } else {
    return undefined;
  }
};

// Encrypt and store user data in cookies
export const doLogin = async (data: LoginResponse,cookieName:string): Promise<void> => {
  const encryptedSessionData = CryptoJS.AES.encrypt(JSON.stringify(data),secretKey);
  cookies().set(cookieName, encryptedSessionData.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // One week
    path: "/",
  });
};

// Encrypt and store file path in cookies
export const loginFilepath = async (file: string): Promise<void> => {
  const encryptedFilePath = CryptoJS.AES.encrypt(file, secretKey).toString();
  cookies().set("filePath", encryptedFilePath, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // One day
    path: "/",
  });
};

// Get user's token by decrypting the data from cookies
export const getToken = (): any => {
  return decryptData("data");
};

// Function to decrypt data from cookies
const decryptData = (name: string): any => {
  try {
    const encryptedCookie = cookies().get(name)?.value;
    if (encryptedCookie) {
      return decrypt(encryptedCookie);
    } else {
      console.warn('No encrypted data found for:', name);
      return null;
    }
  } catch (error) {
    console.error('Error decrypting data:', error);
    doLogout(name);
    return null;
  }
};

//doLogout => remove from localStorage
export const doLogout = (cookieName:string) => {
  cookies().delete('filePath');
  cookies().delete(cookieName);
  
};

// Encrypt a text string using AES encryption
export const encrypt = (text: string): string => {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
};

// Decrypt a ciphertext string using AES decryption
export const decrypt = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
