interface TerminalOutputProps {
  history: string[];
  theme: {
    foreground: string;
  };
}

export function TerminalOutput({ history, theme }: TerminalOutputProps) {
  return (
    <>
      {history.map((line, i) => (
        <div
          key={i}
          className="mb-1 whitespace-pre-wrap terminal-text"
          style={{ color: theme.foreground }}
        >
          {line}
        </div>
      ))}
    </>
  );
}
