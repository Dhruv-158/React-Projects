
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async CreatPost({ Title, Slug, Content, FeaturedImage, Status, UserId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                Slug,
                {
                    Title,
                    Content,
                    FeaturedImage,
                    Status,
                    UserId,
                }
            );
        } catch (error) {
            console.log("APPWRITE serive :: createpost :: error", error);
        }
    }
    async updatePost(Slug, { Title, Content, FeaturedImage, Status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                Slug,
                {
                    Title,
                    Content,
                    FeaturedImage,
                    Status,
                }
            );
        } catch (error) {
            console.log("APPWRITE serive :: createpost :: error", error);
        }
    }
    async deletePost(Slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                Slug
            );
            return true;
        } catch (error) {
            console.log("APPWRITE serive :: createpost :: error", error);
            return false;
        }
    }
    async getPost(Slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                Slug
            );
        } catch (error) {
            console.log("APPWRITE serive :: createpost :: error", error);
        }
    }
    async getPosts(queries = [Query.equal("Status", "active")]) {
        try {
            return await this.databases.listDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("APPWRITE serive :: createpost :: error", error);
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("APPWRITE serive :: createpost :: error", error);
            return false;
        }
    }

    // file delete service
    async DeleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
            return true
            
        } catch (error) {
            console.log("APPWRITE serive :: createpost :: error", error);
            // return false
        }
    }

    // file Preview service
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;
