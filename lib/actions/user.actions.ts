'use server'
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { createAdminClient, createSessionClient } from "./appwrite";

export const signIn = async ({email , password} : signInProps) =>{
  try {
    //Mutation  / Database  / Make fetch
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email , password)
    return parseStringify(response)
  } catch (error) {
    console.log(`Error : ${error}`)
  }
}

export const signUp = async (userData : SignUpParams) =>{
  const {email , password , firstName , lastName} = userData
  try {
  //create  a user account
  const { account } = await createAdminClient();

  const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return parseStringify(newUserAccount)

    
  } catch (error) {
    console.log(`Error : ${error}`)
  }
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const result = await account.get();
    return parseStringify(result);
  } catch (error) {
    console.log(error)
    return null;
  }
}




export const logoutAccount = async () => {
  try {
    const {account} = await createSessionClient()
    cookies().delete('appwrite-session')

    await account.deleteSession('current')
  } catch (error) {
    console.log(error)
    return (null)
  }
}