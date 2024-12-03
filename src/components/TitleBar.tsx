export function TitleBar() {
  return (
    <div className="flex h-7 items-center bg-[#2D2D2D] px-4">
      <div className="flex space-x-2">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
      </div>
      <div className="flex-1 text-center text-sm text-white/50">
        portfolio ~ -bash
      </div>
    </div>
  );
}
