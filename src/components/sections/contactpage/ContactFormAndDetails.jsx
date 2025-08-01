import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  MapPin,
  Phone,
  Mail,
  Loader2,
  CheckCircle,
  Send,
  AlertCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils'; // Assuming you have this utility

// ✨ ENHANCEMENT: A more robust and self-contained FormField component
// It now takes the field name and the entire form state, handling error logic internally.
const FormField = ({ id, label, fieldName, formState, children }) => {
  // ✅ FIX: Safely access errors for a specific field using optional chaining
  const fieldErrors = formState.errors?.[fieldName];

  return (
    <div className='space-y-2'>
      <Label htmlFor={id} className='text-my-primary/90 font-semibold'>
        {label}
      </Label>

      {/* We pass down the error state to the child input/textarea for styling */}
      {React.cloneElement(children, {
        className: cn(children.props.className, {
          'border-destructive focus-visible:ring-destructive': fieldErrors,
        }),
      })}

      {/* This only renders if there are errors for this specific field */}
      {fieldErrors && (
        <div className='text-destructive flex items-center gap-x-2 text-sm font-medium'>
          <AlertCircle className='size-4' />
          {/* We now pass the specific error object to ValidationError */}
          <ValidationError
            prefix={label}
            field={fieldName}
            errors={formState.errors}
          />
        </div>
      )}
    </div>
  );
};

// The main component
const ContactFormAndDetails = ({
  // ✅ FIX: Provide default values for all props to prevent crashes if they are null/undefined
  title = 'Get in Touch',
  bodyText = 'We would love to hear from you. Please fill out this form and we will get in touch with you shortly.',
  contactInfo = [],
}) => {
  const [state, handleSubmit] = useForm('YOUR_FORM_ID_HERE');

  const serviceOptions = [
    'General Inquiry',
    'Crossing Services',
    'Pushing & Jacking',
    'Boring Services',
    'Consulting',
    'Other',
  ];

  const iconMap = {
    Address: <MapPin className='text-my-accent size-6' aria-hidden='true' />,
    Phone: <Phone className='text-my-accent size-6' aria-hidden='true' />,
    Email: <Mail className='text-my-accent size-6' aria-hidden='true' />,
  };

  if (state.succeeded) {
    return (
      <div className='bg-my-secondary/10 font-body flex min-h-[600px] flex-col items-center justify-center rounded-sm p-12 text-center'>
        <CheckCircle className='text-my-accent mb-4 size-16' />
        <h3 className='font-display text-my-primary text-3xl font-bold'>
          Thank You!
        </h3>
        <p className='text-my-secondary mt-2 max-w-md text-lg'>
          Your message has been sent successfully. We appreciate you reaching
          out and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <section
      id='contact'
      className='bg-background font-body w-full overflow-hidden'
    >
      <div className='relative lg:grid lg:grid-cols-2 lg:items-stretch'>
        {/* --- Left Column --- */}
        <div className='bg-my-primary px-6 py-16 text-white sm:px-10 lg:px-12'>
          <div className='mx-auto flex h-full max-w-xl flex-col justify-center lg:mx-0 lg:max-w-lg'>
            <div>
              <h2 className='font-display text-my-accent text-3xl font-bold tracking-tight'>
                {title}
              </h2>
              <p className='text-my-secondary/80 mt-6 text-lg leading-8'>
                {bodyText}
              </p>
              <dl className='mt-10 space-y-8 text-base leading-7 text-slate-100'>
                {/* This is now safe because contactInfo defaults to [] */}
                {contactInfo.map((item) => (
                  <div key={item.value} className='flex gap-x-4'>
                    <dt className='flex-none'>
                      <span className='sr-only'>{item.type}</span>
                      {iconMap[item.type]}
                    </dt>
                    <dd>
                      <a
                        className='hover:text-my-accent focus:ring-my-accent focus:ring-offset-my-primary font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4'
                        href={
                          item.type === 'Email'
                            ? `mailto:${item.value}`
                            : item.type === 'Phone'
                              ? `tel:${item.value}`
                              : '#'
                        }
                      >
                        {item.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* --- Right Column --- */}
        <div className='bg-white px-6 py-16 sm:px-10 lg:px-12'>
          <div className='mx-auto flex h-full max-w-xl flex-col justify-center lg:mx-0 lg:max-w-lg'>
            <div>
              <h3 className='font-display text-my-primary text-2xl font-bold tracking-tight'>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className='mt-8'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                  <FormField
                    id='name'
                    label='Name'
                    fieldName='name'
                    formState={state}
                  >
                    <Input
                      id='name'
                      type='text'
                      name='name'
                      placeholder='John Doe'
                      required
                    />
                  </FormField>

                  <FormField
                    id='company'
                    label='Company'
                    fieldName='company'
                    formState={state}
                  >
                    <Input
                      id='company'
                      type='text'
                      name='company'
                      placeholder='Acme Inc.'
                    />
                  </FormField>

                  <FormField
                    id='email'
                    label='Email'
                    fieldName='email'
                    formState={state}
                  >
                    <Input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='your@email.com'
                      required
                    />
                  </FormField>

                  <FormField
                    id='phone'
                    label='Phone'
                    fieldName='phone'
                    formState={state}
                  >
                    <Input
                      id='phone'
                      type='tel'
                      name='phone'
                      placeholder='+1 (555) 123-4567'
                    />
                  </FormField>

                  <div className='sm:col-span-2'>
                    <Label
                      htmlFor='service-of-interest'
                      className='text-my-primary/90 font-semibold'
                    >
                      Service of Interest
                    </Label>
                    <Select name='service-of-interest'>
                      <SelectTrigger
                        id='service-of-interest'
                        className='mt-2 w-full'
                      >
                        <SelectValue placeholder='Select a service' />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className='sm:col-span-2'>
                    <FormField
                      id='message'
                      label='Message'
                      fieldName='message'
                      formState={state}
                    >
                      <Textarea
                        id='message'
                        name='message'
                        rows={4}
                        required
                        placeholder='How can we help you today?'
                      />
                    </FormField>
                  </div>
                </div>

                <div className='mt-8'>
                  <Button
                    type='submit'
                    variant='primary'
                    size='lg'
                    disabled={state.submitting}
                    className='group flex w-full items-center justify-center gap-x-3 font-bold'
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className='mr-2 size-5 animate-spin' />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className='size-5 transition-transform group-hover:translate-x-1' />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndDetails;
