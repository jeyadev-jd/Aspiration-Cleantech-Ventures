import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Admin from './models/Admin.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/aspire');
    console.log('Connected to DB');

    // Remove any existing admin
    await Admin.deleteMany({});
    
    // Create new admin
    const email = 'aspcv-admin';
    const password = 'ASPCV@energy4321';

    // Model handles hashing in pre-save hook, but let's confirm the model logic
    // The admin schema uses this inside a pre('save') hook:
    /*
      try {
        const salt = await bcrypt.genSalt(10);
        this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
        next();
      }
    */
    // We pass the raw password to passwordHash field so the model hashes it
    await Admin.create({
      email: email,
      passwordHash: password,
      role: 'admin'
    });

    console.log(`Admin user successfully created with email: ${email}`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
