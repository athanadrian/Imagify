('use server');

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { AddImageParams, UpdateImageParams } from '@/types';
import { connectToDatabase } from '../database/mongoose';
import { returnFromServerAction } from '../utils';
import User from '../database/models/user.model';
import Image from '../database/models/image.model';

// ADD IMAGE
export const addImage = async ({ image, userId, path }: AddImageParams) => {
  try {
    await connectToDatabase();

    const author = await User.findById(userId);

    if (!author) throw new Error('User not found');

    const newImage = await Image.create({
      ...image,
      author: author._id,
    });

    revalidatePath(path);
    return returnFromServerAction(newImage);
  } catch (error) {
    return error;
  }
};

// UPDATE IMAGE
export const updateImage = async ({
  image,
  userId,
  path,
}: UpdateImageParams) => {
  try {
    await connectToDatabase();

    const imageToUpdate = await Image.findById(image._id);

    if (!imageToUpdate || imageToUpdate.author.toHexString())
      throw new Error('Unauthorized or Image not found');

    const updatedImage = await Image.findByIdAndUpdate(
      imageToUpdate._id,
      image,
      { new: true }
    );

    revalidatePath(path);
    return returnFromServerAction(updatedImage);
  } catch (error) {
    return error;
  }
};

// DELETE IMAGE
export const deleteImage = async (imageId: string) => {
  try {
    await connectToDatabase();

    await Image.findByIdAndDelete(imageId);
  } catch (error) {
    return error;
  } finally {
    redirect('/');
  }
};

// GET IMAGE BY ID
export const getImageById = async (imageId: string) => {
  try {
    await connectToDatabase();
    const image = await Image.findById(imageId).populate({
      path: 'author',
      model: User,
      select: '_id firstName lastName clerkId',
    });

    if (!image) throw new Error('Image not found');

    return returnFromServerAction(image);
  } catch (error) {
    return error;
  }
};
