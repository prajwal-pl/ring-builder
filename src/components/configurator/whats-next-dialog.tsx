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
import { cn } from '@/lib/utils';

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
        className="sm:max-w-md p-0 gap-0 overflow-hidden border-none shadow-2xl rounded-[32px] bg-background/80 backdrop-blur-2xl"
        onPointerDownOutside={(e) => isLoading && e.preventDefault()}
        onEscapeKeyDown={(e) => isLoading && e.preventDefault()}
      >
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24 px-8 text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <Spinner className="size-12 text-primary relative z-10" />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-bold tracking-tight text-foreground">
                Reviewing your masterpiece...
              </p>
              <p className="text-sm text-muted-foreground animate-pulse">
                Perfecting every detail of your unique design
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Logo and Header */}
            <div className="text-center pt-10 pb-6 px-8 relative">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/[0.03] to-transparent -z-10" />
              <div className="flex justify-center mb-6">
                <div className="size-20 bg-primary rounded-3xl flex items-center justify-center shadow-xl shadow-primary/20 transition-transform hover:scale-105 duration-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-12 text-primary-foreground"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <path d="M12 2L2 9L12 22L22 9L12 2Z" />
                    <path d="M2 9H22" />
                    <path d="M12 2V22" />
                    <path d="M7 9L12 22L17 9" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-3">What&apos;s Next?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto font-medium">
                Our specialists are ready to help you bring this custom vision to life with precision and care.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="px-8 pb-10 space-y-4">
              <div className="group">
                <Button
                  variant="outline"
                  className="w-full h-14 justify-start gap-4 px-6 rounded-2xl border-border/40 hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-300 group-hover:shadow-md"
                  onClick={handleTextMe}
                >
                  <div className="size-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MessageCircleIcon className="size-4" />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-bold">Text Me My Ring</span>
                    <span className="text-[10px] text-muted-foreground font-medium">Link to return to your design anytime</span>
                  </div>
                </Button>
              </div>

              <div className="group">
                <Button
                  variant="outline"
                  className="w-full h-14 justify-start gap-4 px-6 rounded-2xl border-border/40 hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-300 group-hover:shadow-md"
                  onClick={handleSchedule}
                >
                  <div className="size-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <CalendarIcon className="size-4" />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-bold">Schedule Appointment</span>
                    <span className="text-[10px] text-muted-foreground font-medium">Free consultation to discuss your vision</span>
                  </div>
                </Button>
              </div>

              <div className="group">
                <Button
                  variant="outline"
                  className="w-full h-14 justify-start gap-4 px-6 rounded-2xl border-border/40 hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-300 group-hover:shadow-md"
                  onClick={handleEmail}
                >
                  <div className="size-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MailIcon className="size-4" />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-bold">Email Us</span>
                    <div className="flex items-center gap-1.5">
                      <div className={cn("size-1.5 rounded-full animate-pulse", businessStatus.isOpen ? "bg-green-500" : "bg-orange-400")} />
                      <span className="text-[10px] text-muted-foreground font-medium">We typically respond within 1 business day</span>
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-border/20 px-8 py-5 flex items-center justify-between bg-primary/[0.02]">
              <button
                onClick={handleKeepEditing}
                className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeftIcon className="size-3.5" />
                KEEP EDITING
              </button>
              <button
                onClick={handleSaveDesign}
                className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                <BookmarkIcon className="size-3.5" />
                JUST SAVE DESIGN
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
