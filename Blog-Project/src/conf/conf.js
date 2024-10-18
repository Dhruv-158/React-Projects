const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

// Debugging: Log the values to verify they are correctly loaded
console.log("Appwrite URL:", conf.appwriteUrl);
console.log("Project ID:", conf.appwriteProjectId);
console.log("Database ID:", conf.appwriteDatabaseId);
console.log("Collection ID:", conf.appwriteCollectionId);
console.log("Bucket ID:", conf.appwriteBucketId);

export default conf;
