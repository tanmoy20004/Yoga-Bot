import React from 'react';

function renderInline(text, keyPrefix) {
  return String(text)
    .split(/(\*\*[^*]+\*\*)/g)
    .filter((part) => part !== '')
    .map((part, index) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={`${keyPrefix}-${index}`} className="font-bold text-forest-800">
          {part.slice(2, -2)}
        </strong>
      ) : (
        <React.Fragment key={`${keyPrefix}-${index}`}>{part}</React.Fragment>
      ),
    );
}

export default function BotReply({ content }) {
  const lines = String(content || '').split('\n');

  return (
    <div className="space-y-1 text-[13px] leading-[1.7] text-ink/80 sm:text-sm">
      {lines.map((raw, index) => {
        const line = raw.trim();
        if (!line) return <div key={index} className="h-2" />;

        if (/^Step\s+\d+\s*:/i.test(line)) {
          return (
            <p key={index} className="pt-1 font-semibold text-forest-800">
              {renderInline(line, index)}
            </p>
          );
        }

        if (/^\*\*[^*]+\*\*$/.test(line)) {
          return (
            <p key={index} className="pt-2 text-[13px] font-bold text-forest-700">
              {renderInline(line, index)}
            </p>
          );
        }

        if (line.startsWith('- ')) {
          return (
            <div key={index} className="flex gap-2 pl-0.5">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" />
              <span>{renderInline(line.slice(2), index)}</span>
            </div>
          );
        }

        if (/^\d+\.\s/.test(line)) {
          return (
            <div key={index} className="flex gap-2">
              <span className="font-semibold text-forest-600">{line.match(/^\d+/)[0]}.</span>
              <span>{renderInline(line.replace(/^\d+\.\s/, ''), index)}</span>
            </div>
          );
        }

        return <p key={index}>{renderInline(line, index)}</p>;
      })}
    </div>
  );
}
