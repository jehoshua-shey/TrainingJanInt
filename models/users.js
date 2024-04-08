import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            index: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            index: true,
        },
        phone: {
            type: String,
        },
        name: {
            type: String,
            trim: true,
            max: 32,
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        salt: String,
        hashed_password: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)

const User = models.User || model('User', UserSchema);
 
export default User;