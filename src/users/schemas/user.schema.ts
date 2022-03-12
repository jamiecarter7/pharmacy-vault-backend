import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({
    required: [true, 'Please enter an email'],
    lowercase: true,
    // validate: [validEmail, 'Invalid email address'],
    select: false,
  })
  email: string;

  @Prop({ required: [true, 'Please enter a display name'] })
  name: string;

  @Prop({
    required: [true, 'Please enter a username'],
    lowercase: true,
    match: [/^[a-zA-Z0-9]+$/, 'Invalid username'],
    minlength: [3, 'Username must be at least 3 characters'],
    maxlength: [18, 'Username must be at shorter than 18 characters'],
  })
  username: string;

  @Prop({ required: true, select: false })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// USER

// What is it?
// This is a user account for users on the website.

// Data Structure:

// - flagged: [boolean]
// - banned: [boolean] @admin

// - name [string]
// - ?username: [string]
// - password
// - email
// - profession [nurse, pharmacist, doctor, drug rep... string but use like tags]
// - socialMedia:
//   - linkedIn [string]
//   - twitter [string]
//   - instagram [string]
//   - youtube [string]
//   - website [array: string, name/title]
//   - other [string]
// - regNumber:? [string]
// - locationTown: [string]
// - profileImage: [string]
// - userAuth: [selection: string (admin, user, superadmin)]

// ??
// - claps
// - favouritedBy
