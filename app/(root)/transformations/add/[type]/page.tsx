import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

import PageHeader from '@/components/shared/PageHeader';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants/lookup-data/transformationTypes';
import { getUserById } from '@/lib/actions/user.actions';
import { SearchParamProps, TransformationTypeKey } from '@/types';

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');
  const dbUser = await getUserById(userId);
  const transformation = transformationTypes[type];

  return (
    <>
      <PageHeader
        title={transformation.title}
        subTitle={transformation.subTitle}
      />
      <section className='mt-10'>
        <TransformationForm
          action='Add'
          userId={dbUser._id}
          creditBalance={dbUser.creditBalance}
          type={transformation.type as TransformationTypeKey}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
