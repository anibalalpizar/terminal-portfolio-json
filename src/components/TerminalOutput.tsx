interface TerminalOutputProps {
  history: string[];
}

export function TerminalOutput({ history }: TerminalOutputProps) {
  return (
    <>
      {history.map((line, i) => (
        <div
          key={i}
          className="mb-1 whitespace-pre-wrap terminal-text text-white/90"
        >
          {line}
        </div>
      ))}
    </>
  );
}
