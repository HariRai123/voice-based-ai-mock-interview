import { Account, ID } from "appwrite";
import appwriteClient from ".";

class AppwriteAccount {
  constructor() {
    this.account = new Account(appwriteClient);
  }
  async createAppwrite(email,password,fullName) {
    const result = await this.account.create({
      userId: ID.unique(),
      email: email,
      password: password,
      name: fullName,
    });
    return result;
  }
  async getAppwriteUser(){
    try{
    const result= await this.account.get();
    return result;
  }
  catch{
    return ""
  }
}
async createEmailPasswordSession(email, password) {
  try {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      console.log(`${error}`)
    }

    const result = await this.account.createEmailPasswordSession(
      email,
      password
    );

    return result;
  } 
  
    catch (error) {
       console.error("Login Error:", error);
        return {
            status: false,
            error: error.message,
    };
  }
}

}
export default AppwriteAccount;











// import { Client, Account, ID } from "appwrite";

// class AppwriteAccount {
//   client;
//   account;

//   constructor() {
//     this.client = new Client()
//       .setEndpoint(import.meta.env.VITE_APPWRITE_API_ENDPOINT)
//       .setProject(import.meta.env.VITE_APPWRITE_API_PROJECTID);

//     this.account = new Account(this.client);
//   }

//   /* ===================== SIGN UP ===================== */
//   async createAppwrite(email, name, password) {
//     try {
//       const user = await this.account.create(
//         ID.unique(),
//         email,
//         password,
//         name
//       );

//       return {
//         status: true,
//         data: user,
//       };
//     } catch (error) {
//       console.error("Appwrite Signup Error:", error);
//       return {
//         status: false,
//         error: error.message,
//       };
//     }
//   }

//   /* ===================== LOGIN ===================== */
//   async login(email, password) {
//     try {
//       const session = await this.account.createEmailPasswordSession(
//         email,
//         password
//       );

//       return {
//         status: true,
//         data: session,
//       };
//     } catch (error) {
//       console.error("Appwrite Login Error:", error);
//       return {
//         status: false,
//         error: error.message,
//       };
//     }
//   }

//   /* ===================== LOGOUT ===================== */
//   async logout() {
//     try {
//       await this.account.deleteSession("current");
//       return { status: true };
//     } catch (error) {
//       console.error("Logout Error:", error);
//       return { status: false };
//     }
//   }

//   /* ===================== GET CURRENT USER ===================== */
//   async getCurrentUser() {
//     try {
//       const user = await this.account.get();
//       return {
//         status: true,
//         data: user,
//       };
//     } catch (error) {
//       return {
//         status: false,
//         error: error.message,
//       };
//     }
//   }
// }

// export default AppwriteAccount;
