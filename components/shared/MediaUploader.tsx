'use client';
import React, { Dispatch } from 'react';
import { useToast } from '../ui/use-toast';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import AppIcon from './app-ui/AppIcon';
import { appIcons } from '@/constants/appIcons';
import { dataUrl, getImageSize } from '@/lib/utils';

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  publicId: string;
  setImage: Dispatch<any>;
  image: any;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  publicId,
  setImage,
  image,
  type,
}: MediaUploaderProps) => {
  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureUrl: result?.info?.secure_url,
    }));
    onValueChange(result?.info?.public_id);
    toast({
      title: 'Image uploaded successfully!',
      description: '1 credit was deducted from your account.',
      duration: 5000,
      className: 'success-toast',
    });
  };
  const onErrorHandler = () => {
    toast({
      title: 'Something went wrong while uploading!',
      description: 'Please try again.',
      duration: 5000,
      className: 'error-toast',
    });
  };

  const { toast } = useToast();
  return (
    <CldUploadWidget
      uploadPreset='app_imagify'
      options={{
        multiple: false,
        resourceType: 'image',
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onErrorHandler}
    >
      {({ open }) => (
        <div className='flex flex-col gap-4'>
          <h3 className='h3-bold text-dark-600'>Original Image</h3>
          {publicId ? (
            <div className='cursor-pointer overflow-hidden rounded-[10px]'>
              <CldImage
                width={getImageSize(type, image, 'width')}
                height={getImageSize(type, image, 'height')}
                src={publicId}
                alt='image'
                className='media-uploader_cldImage'
                sizes={'(max-width:767px) 100vw, 50vw'}
                placeholder={dataUrl as PlaceholderValue}
              />
            </div>
          ) : (
            <div className='media-uploader_cta' onClick={() => open()}>
              <div className='media-uploader_cta-image'>
                <div className='w-fit rounded-lg bg-purple-gradient p-1 text-white'>
                  <AppIcon icon={appIcons.add} size={22} className='' />
                </div>
              </div>
              <p className='p-14-medium'>Upload an Image</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
