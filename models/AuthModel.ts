import mongoose, { Document, Model } from "mongoose";

interface User extends Document {
  userName: string;
  email: string;
  password: string;
  otp: string
}

const UserSchema = new mongoose.Schema<User>({
  userName: String,
  email: String,
  password: String,
  otp: String
});

const UserModel: Model<User> = mongoose.model<User>("User", UserSchema);
export default UserModel;
