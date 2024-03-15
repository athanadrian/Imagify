import { TransformedImageProps } from '@/types';
import React from 'react';

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
        <button className='download-btn' onClick={downloadHandler}>
          {' '}
          aa
        </button>
      </div>
    </div>
  );
};

export default TransformedImage;
