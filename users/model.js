import mongoose from "mongoose";
import schema from "./schema.js";
const User = mongoose.model("User", schema, "users");
export default User;