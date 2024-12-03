interface CommandLineProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export function CommandLine({
  input,
  onInputChange,
  onSubmit,
  onKeyDown,
  inputRef,
}: CommandLineProps) {
  return (
    <form onSubmit={onSubmit} className="flex items-center font-mono">
      <span className="mr-2 text-[#63B7BB]">→</span>
      <div className="relative flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="terminal-input w-full bg-transparent text-white outline-none"
          spellCheck="false"
          autoComplete="off"
        />
        {!input && <span className="cursor absolute top-[2px] left-0" />}
      </div>
    </form>
  );
}
