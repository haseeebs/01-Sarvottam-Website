import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MapPin, Phone, Mail, Loader2, CheckCircle, Send } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input'; // Assuming these are also styled with your theme
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// The main component
const ContactFormAndDetails = ({ title, bodyText, contactInfo }) => {
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
    // ✨ Icons now inherit color, but we can keep accent for emphasis
    Address: <MapPin className='text-my-accent size-6' aria-hidden='true' />,
    Phone: <Phone className='text-my-accent size-6' aria-hidden='true' />,
    Email: <Mail className='text-my-accent size-6' aria-hidden='true' />,
  };

  // --- ✨ UX ENHANCEMENT: On-Brand Success State ---
  // A more visually pleasing and branded success message.
  if (state.succeeded) {
    return (
      <div className='bg-my-secondary/10 font-body flex min-h-[600px] flex-col items-center justify-center rounded-lg p-12 text-center'>
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
    // ✨ Applied body font to the entire section for consistency
    <section
      id='contact'
      className='bg-background font-body w-full overflow-hidden'
    >
      <div className='relative lg:grid lg:grid-cols-2'>
        {/* --- ✨ Left Column: Strong Brand Presence --- */}
        <div className='bg-my-primary px-6 py-16 text-white sm:px-10 lg:px-12'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <h2 className='font-display text-my-accent text-3xl font-bold tracking-tight'>
              {title}
            </h2>
            {/* ✨ Used a lighter, more readable text color on the dark background */}
            <p className='text-my-secondary/80 mt-6 text-lg leading-8'>
              {bodyText}
            </p>
            <dl className='mt-10 space-y-8 text-base leading-7 text-slate-100'>
              {contactInfo.map((item) => (
                // ✅ FIX: Use a unique value like item.value for the key
                <div key={item.value} className='flex gap-x-4'>
                  <dt className='flex-none'>
                    <span className='sr-only'>{item.type}</span>
                    {iconMap[item.type]}
                  </dt>
                  <dd>
                    <a
                      className='hover:text-my-accent focus:ring-my-accent focus:ring-offset-my-primary font-semibold transition-colors focus:ring-2 focus:ring-offset-4 focus:outline-none'
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

        {/* --- ✨ Right Column: Clean & Functional Form --- */}
        <div className='px-6 py-16 sm:px-10 lg:px-12'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <h3 className='font-display text-my-primary text-2xl font-bold tracking-tight'>
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                {/* ✨ Applied theme fonts and colors to all form fields */}
                <div className='space-y-2'>
                  <Label
                    htmlFor='name'
                    className='text-my-primary/90 font-semibold'
                  >
                    Name
                  </Label>
                  <Input id='name' type='text' name='name' required />
                  <ValidationError
                    prefix='Name'
                    field='name'
                    errors={state.errors}
                    className='text-destructive text-sm font-medium'
                  />
                </div>
                <div className='space-y-2'>
                  <Label
                    htmlFor='company'
                    className='text-my-primary/90 font-semibold'
                  >
                    Company
                  </Label>
                  <Input id='company' type='text' name='company' />
                </div>
                <div className='space-y-2'>
                  <Label
                    htmlFor='email'
                    className='text-my-primary/90 font-semibold'
                  >
                    Email
                  </Label>
                  <Input id='email' type='email' name='email' required />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                    className='text-destructive text-sm font-medium'
                  />
                </div>
                <div className='space-y-2'>
                  <Label
                    htmlFor='phone'
                    className='text-my-primary/90 font-semibold'
                  >
                    Phone
                  </Label>
                  <Input id='phone' type='tel' name='phone' />
                  <ValidationError
                    prefix='Phone'
                    field='phone'
                    errors={state.errors}
                    className='text-destructive text-sm font-medium'
                  />
                </div>
                <div className='space-y-2 sm:col-span-2'>
                  <Label
                    htmlFor='service-of-interest'
                    className='text-my-primary/90 font-semibold'
                  >
                    Service of Interest
                  </Label>
                  <Select name='service-of-interest'>
                    <SelectTrigger id='service-of-interest'>
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
                <div className='sm:col--span-2 space-y-2'>
                  <Label
                    htmlFor='message'
                    className='text-my-primary/90 font-semibold'
                  >
                    Message
                  </Label>
                  <Textarea id='message' name='message' rows={4} required />
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                    className='text-destructive text-sm font-medium'
                  />
                </div>
              </div>

              {/* --- ✨ CTA Button: The Star of the Show --- */}
              <div className='mt-8'>
                <Button
                  type='submit'
                  variant='primary' // ✨ Using our new, high-impact variant
                  size='lg' // ✨ Larger size for more presence
                  disabled={state.submitting}
                  className='w-full font-bold'
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className='animate-spin' />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndDetails;
