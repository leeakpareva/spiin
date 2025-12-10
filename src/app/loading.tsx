export default function Loading() {
  return (
    <div className="fixed inset-0 bg-brand-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <img
            src="/spiin colors.jpg"
            alt="SPIIN"
            className="w-24 h-24 object-contain animate-pulse"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}