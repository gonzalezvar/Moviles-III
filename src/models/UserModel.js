import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserModel = new Schema({
    name: { type: String, required: false },
    age: { type: Number, required: false },
    identification: { type: Number, required: false },
});

const User = mongoose.model('user', UserModel);
export default User;