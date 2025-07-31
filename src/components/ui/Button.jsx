import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

// --color-my-primary: #0d2c54; (Dark Blue)
// --color-my-secondary: #8d99ae; (Light Grey-Blue)
// --color-my-accent: #f2b705; (Yellow/Gold)
// --color-my-destructive: #e63946; (Red for destructive actions)
// --color-my-destructive-foreground: #f1faee; (Light color for text on red)

const buttonVariants = cva(
  // Base styles for all buttons
  'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer select-none',
  {
    variants: {
      variant: {
        // 'primary': High-emphasis action
        'primary': 'bg-my-accent text-my-primary hover:bg-my-accent/90',

        // 'secondary': Medium-emphasis action
        'secondary': 'bg-my-primary text-my-secondary hover:bg-my-primary/90',

        // 'destructive': For dangerous actions like delete
        'destructive':
          'bg-my-destructive text-my-destructive-foreground hover:bg-my-destructive/90',

        // 'outline-primary': A primary button with no background
        'outline-primary':
          'border border-my-primary bg-transparent text-my-primary hover:bg-my-primary hover:text-my-secondary',

        // 'outline-accent': An accent button with no background (New!)
        'outline-accent':
          'border border-my-accent bg-transparent text-my-accent hover:bg-my-accent hover:text-my-primary',

        // 'ghost': Low-emphasis, used for tertiary actions
        'ghost': 'hover:bg-my-primary/10 hover:text-my-primary',

        // 'link': Looks like a link but acts like a button
        'link': 'text-my-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-sm px-3',
        lg: 'h-11 rounded-sm px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
