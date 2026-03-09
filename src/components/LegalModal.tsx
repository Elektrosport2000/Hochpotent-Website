import { useEffect } from 'react';
import { X } from 'lucide-react';

type Props = {
  title: string;
  content: string;
  closeLabel?: string;
  onClose: () => void;
};

// Minimales Markdown-Rendering (fett, h1, h2, h3, hr, Absätze)
function renderMarkdown(text: string) {
  return text
    .trim()
    .split('\n')
    .map((line, i) => {
      if (line.startsWith('# '))
        return <h1 key={i} className="font-display text-4xl uppercase tracking-tight text-white mb-4 mt-6">{line.slice(2)}</h1>;
      if (line.startsWith('## '))
        return <h2 key={i} className="font-display text-2xl uppercase tracking-wider text-neon-violet mb-3 mt-8">{line.slice(3)}</h2>;
      if (line.startsWith('### '))
        return <h3 key={i} className="font-display text-xl uppercase tracking-wider text-white mb-2 mt-6">{line.slice(4)}</h3>;
      if (line.startsWith('---'))
        return <hr key={i} className="border-white/10 my-6" />;
      if (line.startsWith('- '))
        return <li key={i} className="font-body text-gray-300 text-base leading-relaxed ml-4 list-disc">{parseInline(line.slice(2))}</li>;
      if (line.startsWith('*') && line.endsWith('*') && line.length > 2)
        return <p key={i} className="font-body text-gray-500 text-sm mt-6">{line.slice(1, -1)}</p>;
      if (line.trim() === '')
        return <div key={i} className="h-2" />;
      return <p key={i} className="font-body text-gray-300 text-base leading-relaxed">{parseInline(line)}</p>;
    });
}

function parseInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>
      : part
  );
}

export default function LegalModal({ title, content, closeLabel = 'Schließen', onClose }: Props) {
  // ESC zum Schließen
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Body-Scroll sperren
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full sm:max-w-3xl max-h-[92dvh] sm:max-h-[85vh] bg-dark-surface border border-white/10 flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
          <h2 className="font-display text-2xl uppercase tracking-widest text-white">{title}</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-neon-violet hover:text-neon-violet transition-colors"
            aria-label={closeLabel}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollbarer Inhalt */}
        <div className="overflow-y-auto px-6 py-6 flex-1">
          {renderMarkdown(content)}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full font-display text-lg uppercase tracking-widest text-gray-500 hover:text-white transition-colors py-2"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
