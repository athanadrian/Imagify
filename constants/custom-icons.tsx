import Image from 'next/image';
import { IconBaseProps, IconType } from 'react-icons';

export const FreePlanIcon: IconType = ({
  size = 20,
  className,
}: IconBaseProps) => (
  <Image
    src='/assets/icons/free-plan.svg'
    alt='free plan'
    width={+size}
    height={+size}
    className={className}
  />
);
