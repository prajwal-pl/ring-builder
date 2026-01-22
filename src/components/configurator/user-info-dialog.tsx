'use client';

import { useState, useEffect } from 'react';
import { CheckIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const USER_INFO_STORAGE_KEY = 'ring-builder-user-info';
const USER_INFO_DISMISSED_KEY = 'ring-builder-user-info-dismissed';

interface UserInfo {
  name: string;
  phone: string;
}

const benefits = [
  'Fully customize your ring',
  'Auto-save & share your design',
  'Schedule in-store & virtual appointments',
];

export function UserInfoDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if dialog was already dismissed or user info was saved
    const dismissed = sessionStorage.getItem(USER_INFO_DISMISSED_KEY);
    const savedInfo = localStorage.getItem(USER_INFO_STORAGE_KEY);

    if (!dismissed && !savedInfo) {
      // Small delay to let the page render first
      const timer = setTimeout(() => {
        setOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSave = () => {
    setIsSubmitting(true);

    const userInfo: UserInfo = {
      name: name.trim(),
      phone: phone.trim(),
    };

    // Save to localStorage if any info provided
    if (userInfo.name || userInfo.phone) {
      localStorage.setItem(USER_INFO_STORAGE_KEY, JSON.stringify(userInfo));
    }

    // Mark as dismissed for this session
    sessionStorage.setItem(USER_INFO_DISMISSED_KEY, 'true');

    setIsSubmitting(false);
    setOpen(false);
  };

  const handleSkip = () => {
    // Mark as dismissed for this session
    sessionStorage.setItem(USER_INFO_DISMISSED_KEY, 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-md backdrop-blur-sm"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="text-xl font-semibold">
            Your dream ring is almost ready!
          </DialogTitle>
          <DialogDescription className="text-left mt-4">
            Enter your details to:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 mb-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2">
              <div className="size-5 rounded bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <CheckIcon className="size-3.5 text-white" />
              </div>
              <span className="text-sm text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12"
          />
          <Input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-12"
          />
        </div>

        <Button
          onClick={handleSave}
          disabled={isSubmitting}
          className="w-full h-12 bg-neutral-400 hover:bg-neutral-500 text-white font-medium"
        >
          Save & Continue
        </Button>

        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          By entering your phone number and clicking &quot;Save & Continue&quot; you agree
          to receive SMS messages from West & Co Diamonds about your ring
          customization, saved designs, appointments, and related offers.
          Message frequency varies. Msg & data rates may apply. Reply STOP to
          cancel. HELP for help. Consent is not a condition of purchase.{' '}
          <a href="/privacy" className="underline hover:text-foreground">
            View our Privacy Policy.
          </a>
        </p>

        <button
          onClick={handleSkip}
          className="text-sm text-muted-foreground hover:text-foreground underline-offset-2 hover:underline transition-colors"
        >
          Continue without saving
        </button>
      </DialogContent>
    </Dialog>
  );
}
