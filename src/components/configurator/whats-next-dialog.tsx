'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  MessageCircleIcon,
  CalendarIcon,
  MailIcon,
  ArrowLeftIcon,
  BookmarkIcon,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

interface WhatsNextDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function isBusinessOpen(): { isOpen: boolean; message: string } {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  // Assuming business hours: Mon-Sat 9AM-6PM, closed Sunday
  const isWeekday = day >= 1 && day <= 6;
  const isDuringHours = hour >= 9 && hour < 18;

  if (isWeekday && isDuringHours) {
    return { isOpen: true, message: "We're currently open" };
  }

  // Calculate next opening time
  if (day === 0) {
    // Sunday - opens Monday 9AM
    return { isOpen: false, message: "We'll respond tomorrow at 9AM when we reopen" };
  } else if (hour >= 18) {
    // After hours - opens next day 9AM
    return { isOpen: false, message: "We'll respond tomorrow at 9AM when we reopen" };
  } else if (hour < 9) {
    // Before hours - opens today 9AM
    return { isOpen: false, message: "We'll respond at 9AM when we open" };
  }

  return { isOpen: false, message: "We'll respond when we reopen" };
}

export function WhatsNextDialog({ open, onOpenChange }: WhatsNextDialogProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const businessStatus = isBusinessOpen();

  useEffect(() => {
    if (open) {
      setIsLoading(true);
      // Simulate loading/review process
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleKeepEditing = () => {
    onOpenChange(false);
  };

  const handleSaveDesign = () => {
    // Save design logic - for now just close
    alert('Design saved! (MVP placeholder)');
    onOpenChange(false);
  };

  const handleTextMe = () => {
    // This could open a phone input dialog or use saved phone
    alert('Text Me My Ring feature coming soon!');
  };

  const handleSchedule = () => {
    // This could link to a scheduling page
    alert('Schedule Appointment feature coming soon!');
  };

  const handleEmail = () => {
    // This could open a mailto link or email form
    window.location.href = 'mailto:info@westandco.com?subject=Custom Ring Design Inquiry';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={!isLoading}
        className="sm:max-w-lg p-0 gap-0 overflow-hidden"
        onPointerDownOutside={(e) => isLoading && e.preventDefault()}
        onEscapeKeyDown={(e) => isLoading && e.preventDefault()}
      >
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 px-6">
            <Spinner className="size-10 text-primary mb-4" />
            <p className="text-lg font-medium text-foreground">
              Reviewing your custom ring...
            </p>
          </div>
        ) : (
          <>
            {/* Logo and Header */}
            <div className="text-center pt-6 px-6">
              <div className="flex justify-center mb-4">
                <div className="size-16 bg-black rounded flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-10 text-white"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2L2 9L12 22L22 9L12 2Z" />
                    <path d="M2 9H22" />
                    <path d="M12 2V22" />
                    <path d="M7 9L12 22L17 9" />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">What&apos;s Next?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Whether you want this exact design or something completely
                different, our engagement ring specialists are standing by to help
                make it a reality.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="px-6 py-6 space-y-3">
              <div>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-center gap-2"
                  onClick={handleTextMe}
                >
                  <MessageCircleIcon className="size-5" />
                  Text Me My Ring
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-1.5">
                  Get a link to return to your design anytime
                </p>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-center gap-2"
                  onClick={handleSchedule}
                >
                  <CalendarIcon className="size-5" />
                  Schedule Appointment
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-1.5">
                  Book a free consultation to discuss your design
                </p>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-center gap-2"
                  onClick={handleEmail}
                >
                  <MailIcon className="size-5" />
                  Email Us
                </Button>
                <div className="text-center mt-1.5">
                  <p className="text-xs flex items-center justify-center gap-1">
                    <span
                      className={`size-2 rounded-full ${
                        businessStatus.isOpen ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    />
                    <span
                      className={
                        businessStatus.isOpen
                          ? 'text-green-600'
                          : 'text-red-500'
                      }
                    >
                      {businessStatus.isOpen
                        ? "We're currently open"
                        : "We're currently closed"}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {businessStatus.message}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-border px-6 py-4 flex items-center justify-between bg-muted/30">
              <button
                onClick={handleKeepEditing}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeftIcon className="size-4" />
                Keep Editing Your Ring
              </button>
              <button
                onClick={handleSaveDesign}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <BookmarkIcon className="size-4" />
                Just save design
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
