import React from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from '../../ui/form';

type Props<T extends FieldValues> = {
  control: Control<T> | undefined;
  render: (props: { field: any }) => React.ReactNode;
  name: Path<T>;
  formLabel?: string;
  className?: string;
};

const AppField = <T extends FieldValues>({
  control,
  render,
  name,
  formLabel,
  className,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>{render({ field })}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AppField;
