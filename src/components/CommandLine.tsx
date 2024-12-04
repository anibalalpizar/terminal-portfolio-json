interface CommandLineProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  theme: {
    foreground: string;
    accent: string;
  };
}

export function CommandLine({
  input,
  onInputChange,
  onSubmit,
  onKeyDown,
  inputRef,
  theme,
}: CommandLineProps) {
  return (
    <form onSubmit={onSubmit} className="flex items-center font-mono">
      <span style={{ color: theme.accent }} className="mr-2">
        →
      </span>
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="terminal-input w-full bg-transparent outline-none"
          style={{ color: theme.foreground }}
          spellCheck="false"
          autoComplete="off"
        />
        {!input && (
          <span
            className="cursor absolute top-[2px] left-0"
            style={{ background: theme.foreground }}
          />
        )}
      </div>
    </form>
  );
}
