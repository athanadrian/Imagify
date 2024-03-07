import { CSSProperties, FC, ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { appIcons } from '@/constants/appIcons';

export interface AppIconProps {
  icon: keyof typeof appIcons | IconType;
  color?: string;
  className?: string;
  link?: boolean;
  size?: number;
  style?: CSSProperties;
  onClick?(): void;
  tooltipText?: string;
  tooltipClassName?: string;
}

const AppIcon: FC<AppIconProps> = ({
  icon,
  color,
  size,
  link,
  onClick,
  className,
  style,
  tooltipText,
  tooltipClassName,
}) => {
  const Icon = typeof icon === 'string' ? appIcons[icon] : icon;
  const Element = tooltipText ? TooltipElement : PlainElement;

  return (
    <Element tooltipText={tooltipText} tooltipClassName={tooltipClassName}>
      <Icon
        onClick={onClick}
        className={`${link ? 'cursor-pointer' : ''}  ${className}`}
        style={{ color, ...style }}
        size={size}
      />
    </Element>
  );
};
export default AppIcon;

interface ElementProps {
  children: ReactNode;
  tooltipText?: string;
  tooltipClassName?: string;
}

const TooltipElement: FC<ElementProps> = ({
  tooltipText,
  tooltipClassName,
  children,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className='bg-slate-400' side='right'>
          <p className={tooltipClassName}>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const PlainElement: FC<ElementProps> = ({ children }) => {
  return <>{children}</>;
};
