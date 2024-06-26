import { Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
import AppError from '../../errors/AppError';

//Created
const cerateAdmin = async (req: Request, res: Response) => {
  const result = await UserServices.createAdmin(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Admin registered successfully',
    data: result,
  });
};

//Get single
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await UserServices.getSingleUser(userId);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'User API not found');
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A user retrieved successfully',
    data: result,
  });
});

//Update
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await UserServices.updateUser(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is updated successfully',
    data: result,
  });
});

export const UserControllers = {
  cerateAdmin,
  getSingleUser,
  updateUser,
};
