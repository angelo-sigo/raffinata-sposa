import mongoose from 'mongoose';
import connectDB from './mongoose.config.js';

jest.mock('mongoose');
jest.spyOn(console, 'log');
jest.spyOn(console, 'error');

beforeEach(() => {
  jest.clearAllMocks();
 
  process.env.DB_CONNECTION_STRING = 'mongodb://localhost:1234/placeholder';
  process.exitCode = undefined;
});

describe('Database Connection', () => {
  test('Should connect successfully when URI is defined', async () => {
    mongoose.connect.mockResolvedValueOnce({});
    await connectDB();
    
    expect(mongoose.connect).toHaveBeenCalledWith(process.env.DB_CONNECTION_STRING);
    expect(console.log).toHaveBeenCalledWith("Database connection established successfully.");
    expect(process.exitCode).not.toBe(1);
  });
  test('Should log an error and set exit code when connection fails', async () => {
    const connectionError = new Error('Simulated connection failure');
    
    mongoose.connect.mockRejectedValueOnce(connectionError);
    await connectDB();
    
    expect(mongoose.connect).toHaveBeenCalledWith(process.env.DB_CONNECTION_STRING);
    expect(console.error).toHaveBeenCalledWith('ERROR: Failed to connect with database.', connectionError);
    expect(process.exitCode).toBe(1);
  });
  test('Should log fatal error and set exit code when DB_CONNECTION_STRING is missing on module load', async () => {
    delete process.env.DB_CONNECTION_STRING;
    await connectDB();
    
    expect(console.error).toHaveBeenCalledWith('FATAL ERROR: DB_CONNECTION_STRING is not defined in environment variables.');
    expect(process.exitCode).toBe(1);
    expect(mongoose.connect).not.toHaveBeenCalled();
  });
});