import conf from "../conf/conf";
import { Client, ID, Database, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Database(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {title, content, featuredImage, status, userId})
        } catch (error) {
            console.log("Appwrite service :: createPost :: error");
            
        }
    };

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: Error");
            
        }
    };

    async deletePost(slug){
        try {
            await this.databases.deleteFile(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug )
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error");
            return false; 
        }
    };

    async getDocument(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
        } catch (error) {
            console.log("Appwrite Service :: getDocument :: error");
            return false;
        }
    };

    async listPost(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                100,
                0,

            )
        } catch (error) {
            console.log("Appwrite service :: listPost :: error");
            return false;
        }
    };

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error");
            return false;
        }
    };

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error");
            return false;
        }
    };

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;