import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import Universitiesdata from './data/universities.js';
import User from './models/userModel.js';
import University from './models/universityModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await University.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleUniversities = Universitiesdata.map((uni) => {
      return { ...uni, user: adminUser };
    });

    await University.insertMany(sampleUniversities);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await University.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
