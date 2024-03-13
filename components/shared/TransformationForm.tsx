/* eslint-disable no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  aspectRatioOptions,
  defaultValues,
  transformationTypes,
} from '@/constants/lookup-data';
import { TransformationFormProps, Transformations } from '@/types';
import AppField from './app-ui/AppField';
import { useState } from 'react';
import { AspectRatioKey } from '@/lib/utils';
import config from 'next/config';

const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
});

const TransformationForm = ({
  action,
  type,
  userId,
  creditBalance,
  config = null,
  data = null,
}: TransformationFormProps) => {
  const transformationType = transformationTypes[type];
  const [image, setImage] = useState(data);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const [transformationConfig, setTransformationConfig] = useState(config);
  const [newTransformation, setNewTransformation] =
    useState<Transformations | null>(null);
  const initialValues =
    data && action === 'Update'
      ? {
          title: data?.title,
          aspectRatio: data?.aspectRatio,
          color: data?.color,
          prompt: data?.prompt,
          publicId: data?.publicId,
        }
      : defaultValues;

  const onSelectFieldHandler = (
    value: string,
    onChangeField: (value: string) => void
  ) => {};

  const onInputChangeHandler = (
    fieldName: string,
    value: string,
    type: string,
    onChangeField: (value: string) => void
  ) => {};

  const onTransformHandler = () => {
    //
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <AppField
          name='title'
          formLabel='Image Title'
          className='w-full'
          control={form.control}
          render={({ field }) => <Input {...field} className='input-field' />}
        />
        {type === 'fill' && (
          <AppField
            name='aspectRatio'
            formLabel='Aspect Ratio'
            className='w-full'
            control={form.control}
            render={({ field }) => (
              <Select
                onValueChange={(value) =>
                  onSelectFieldHandler(value, field.onChange)
                }
              >
                <SelectTrigger className='select-field'>
                  <SelectValue placeholder='Select size' />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(aspectRatioOptions).map((key) => (
                    <SelectItem value={key} key={key} className='select-item'>
                      {aspectRatioOptions[key as AspectRatioKey].label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        )}
        {(type === 'remove' || type === 'recolor') && (
          <div className='prompt-field'>
            <AppField
              control={form.control}
              name='prompt'
              formLabel={type === 'remove' ? 'Object remove' : 'Object recolor'}
              className='w-full'
              render={({ field }) => (
                <Input
                  {...field}
                  className='input-field'
                  onChange={(e) =>
                    onInputChangeHandler(
                      'prompt',
                      e.target.value,
                      type,
                      field.onChange
                    )
                  }
                />
              )}
            />
          </div>
        )}
        {type === 'recolor' && (
          <div className='prompt-field'>
            <AppField
              control={form.control}
              name='color'
              formLabel='Color'
              className='w-full'
              render={({ field }) => (
                <Input
                  {...field}
                  className='input-field'
                  onChange={(e) =>
                    onInputChangeHandler(
                      'color',
                      e.target.value,
                      'recolor',
                      field.onChange
                    )
                  }
                />
              )}
            />
          </div>
        )}
        <div className='flex flex-col gap-4'>
          <Button
            className='submit-button capitalize'
            type='button'
            disabled={isTransforming || newTransformation === null}
            onClick={onTransformHandler}
          >
            {isTransforming ? 'Transforming...' : 'Apply transformation'}
          </Button>
          <Button
            className='submit-button capitalize'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting' : 'Save image'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default TransformationForm;
