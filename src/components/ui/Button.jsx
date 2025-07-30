import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

// --color-my-primary: #0d2c54; (Dark Blue)
// --color-my-secondary: #8d99ae; (Light Grey-Blue)
// --color-my-accent: #f2b705; (Yellow/Gold)

const buttonVariants = cva(
  // Base styles for the button
  'inline-flex items-center justify-center select-none rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // 'primary' variant: accent color background, primary color text.
        primary: 'bg-my-accent text-my-primary hover:bg-my-accent/90',
        // 'secondary' variant: primary color background, secondary color text.
        secondary: 'bg-my-primary text-my-secondary hover:bg-my-primary/90',
        // 'outline' variant: transparent background, primary color border and text.
        // On hover, it inverts to a primary background with secondary text.
        outline:
          'border border-my-primary bg-transparent text-my-primary hover:bg-my-primary hover:text-my-secondary',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-sm px-3',
        lg: 'h-11 rounded-sm px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      // Set 'primary' as the default button style.
      variant: 'primary',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use Slot if asChild is true, otherwise use a standard button.
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
