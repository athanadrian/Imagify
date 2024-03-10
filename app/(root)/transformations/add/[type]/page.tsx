import PageHeader from '@/components/shared/PageHeader';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants/lookup-data';
import { SearchParamProps } from '@/types';
import React from 'react';

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <>
      <PageHeader
        title={transformation.title}
        subTitle={transformation.subTitle}
      />
      <TransformationForm />
    </>
  );
};

export default AddTransformationTypePage;
