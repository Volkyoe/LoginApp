import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true },
    },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    sessionExp: { type: Date },
  },
  {
    timestamps: { createdAt: 'registeredAt' },
    //toJSON: { getters: true },
  }
);

userSchema
  .virtual('fullName')
  .get((_value, _vir, { name }) => `${name.first} ${name.last}`)
  .set((value, _vir, { name }) => ([name.first, name.last] = value.split(' ')));

// console.log(userSchema);

export default model('User', userSchema);
