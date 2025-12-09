type Props = {
  title: string;
  actionLabel?: string;
  onActionClick?: () => void;
  description?: string;
};

export default function SectionHeader({
  title,
  actionLabel,
  onActionClick,
  description
}: Props) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        {actionLabel && (
          <button 
            onClick={onActionClick}
            className="text-xs font-medium text-white/70 hover:text-brand-accent transition-colors"
          >
            {actionLabel} →
          </button>
        )}
      </div>
      {description && (
        <p className="text-xs text-white/60">{description}</p>
      )}
    </div>
  );
}