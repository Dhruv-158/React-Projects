import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        // Log URL and project ID for debugging
        console.log("Appwrite URL:", conf.appwriteUrl);
        console.log("Appwrite Project ID:", conf.appwriteProjectId);

        this.client
            .setEndpoint(conf.appwriteUrl) // Ensure this is a valid URL
            .setProject(conf.appwriteProjectId); // Ensure this is a valid project ID
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        const userAccount = await this.account.create(
            ID.unique(),
            email,
            password,
            name
        );

        if (userAccount) {
            return this.login({ email, password });
        } else {
            return userAccount;
        }
    }

    async login({ email, password }) {
        return await this.account.createEmailPasswordSession(email, password);
    }

    async getCurrentUser() {
        try {
            const currentUser = await this.account.get();
            return currentUser;
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error", error.message || error);
            return null;
        }
    }
    

    async logout() {
        try {
            await this.account.deleteSessions('all');
        } catch (error) {
            console.log("Appwrite Service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;

