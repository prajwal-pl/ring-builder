'use client';

export function RingViewerPlaceholder() {
  return (
    <div className="h-full min-h-[400px] lg:min-h-screen flex items-center justify-center bg-muted/30">
      <div className="flex flex-col items-center gap-6 text-center p-8">
        {/* Placeholder Ring SVG */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-foreground/50"
        >
          {/* Ring Band */}
          <ellipse
            cx="100"
            cy="130"
            rx="70"
            ry="25"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
          {/* Diamond */}
          <path
            d="M100 40 L130 70 L100 100 L70 70 Z"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M70 70 L100 100 L130 70"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="100"
            y1="40"
            x2="100"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* Prongs */}
          <line
            x1="85"
            y1="100"
            x2="85"
            y2="115"
            stroke="currentColor"
            strokeWidth="3"
          />
          <line
            x1="115"
            y1="100"
            x2="115"
            y2="115"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-muted-foreground">
            3D Ring Preview
          </h3>
          <p className="text-sm text-muted-foreground/70 max-w-xs">
            Interactive 3D viewer will be available in the next update
          </p>
        </div>
      </div>
    </div>
  );
}
