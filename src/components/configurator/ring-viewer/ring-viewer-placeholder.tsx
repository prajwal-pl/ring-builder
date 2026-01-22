'use client';

export function RingViewerPlaceholder() {
  return (
    <div className="h-full min-h-[400px] lg:min-h-screen flex items-center justify-center bg-transparent">
      <div className="flex flex-col items-center gap-10 text-center p-12 relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-[0.03]" />
        
        {/* Modern Minimal Ring Illustration */}
        <div className="relative group">
          <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-1000" />
          <svg
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary/20 transition-all duration-700 group-hover:scale-105 group-hover:text-primary/30"
          >
            {/* Ring Band with Depth */}
            <ellipse
              cx="120"
              cy="160"
              rx="80"
              ry="30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="opacity-40"
            />
            <ellipse
              cx="120"
              cy="165"
              rx="85"
              ry="35"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            
            {/* Elegant Diamond Silhouette */}
            <g className="animate-pulse duration-[3000ms]">
              <path
                d="M120 40 L160 85 L120 135 L80 85 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.05"
              />
              <path
                d="M80 85 L160 85"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <path
                d="M120 40 L120 135"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </g>
            
            {/* Shine Effects */}
            <circle cx="160" cy="85" r="2" fill="currentColor" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="100" cy="60" r="1.5" fill="currentColor" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </svg>
        </div>

        <div className="space-y-4 max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">
            Interactive Experience
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground/80">
            3D Ring Preview
          </h3>
          <p className="text-sm text-muted-foreground/60 leading-relaxed italic">
            Visualizing your unique creation in stunning detail. The interactive 3D viewer is being prepared for your design.
          </p>
          
          <div className="flex justify-center gap-1.5 pt-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className="size-1.5 rounded-full bg-primary/20 animate-bounce" 
                style={{ animationDelay: `${i * 0.2}s` }} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
