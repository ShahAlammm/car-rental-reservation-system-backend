import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from './user.model';

const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, role, password, phone, address } = req.body;
    const user = new User({ name, email, role, password, phone, address });
    await user.save();
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'User registered successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Server error',
      // errorMessages: error.message
    });
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'Invalid email or password',
      });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || '',
      { expiresIn: '1d' },
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      data: user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Server error',
      // errorMessages: error.message
    });
  }
};

export { signUp, signIn };
