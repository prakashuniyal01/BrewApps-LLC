const MONGO_COLLECTION_OPTIONS ={
    versionKey: false,
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
        updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
}

module.exports = {MONGO_COLLECTION_OPTIONS}