import React from 'react';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import { CldImage } from 'next-cloudinary';
import AppIcon from './app-ui/AppIcon';
import { appIcons } from '@/constants/appIcons';
import { dataUrl, debounce, getImageSize } from '@/lib/utils';
import { TransformedImageProps } from '@/types';

const TransformedImage = ({
  image,
  type,
  isTransforming,
  setIsTransforming,
  transformationConfig,
  hasDownload = false,
}: TransformedImageProps) => {
  const downloadHandler = () => {
    //
  };
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex-between'>
        <h3 className='h3-bold text-dark-600'>Transformed</h3>
        {hasDownload && (
          <button className='download-btn' onClick={downloadHandler}>
            <AppIcon
              icon={appIcons.dashboard}
              className='pb-[6px] text-purple-500'
              size={30}
              tooltipText='Download'
            />
          </button>
        )}
      </div>
      {image?.publicId && transformationConfig ? (
        <div className='relative'>
          <CldImage
            width={getImageSize(type, image, 'width')}
            height={getImageSize(type, image, 'height')}
            src={image?.publicId}
            alt='image'
            className='media-uploader_cldImage'
            sizes={'(max-width:767px) 100vw, 50vw'}
            placeholder={dataUrl as PlaceholderValue}
            onLoad={() => {
              setIsTransforming && setIsTransforming(false);
            }}
            onError={() => {
              debounce(() => {
                setIsTransforming && setIsTransforming(false);
              }, 8000)();
            }}
            {...transformationConfig}
          />
          {isTransforming && (
            <div className='transforming-loader'>
              <AppIcon
                icon={appIcons.dashboard}
                size={50}
                className='text-purple-400'
              />
              <p className='text-white/80'>Please wait...</p>
            </div>
          )}
        </div>
      ) : (
        <div className='transformed-placeholder'>Transformed Image</div>
      )}
    </div>
  );
};

export default TransformedImage;
