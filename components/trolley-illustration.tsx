interface TrolleyIllustrationProps {
  action?: "pullLever" | "doNothing";
  response?: string;
}

export function TrolleyIllustration({
  action,
  response,
}: TrolleyIllustrationProps) {
  return (
    <div className="w-full bg-white rounded-xl px-6">
      {action && response && (
        <div className="bg-black/80 p-4 rounded-xl mb-2">
          <p className="text-white text-base text-center">{response}</p>
        </div>
      )}
      <div className="aspect-[16/10] relative">
        {action ? (
          <video
            src={`/${action}.mp4`}
            className="size-full object-contain"
            autoPlay
            muted
            playsInline
          />
        ) : (
          <video
            src="/noAction.mp4"
            className="size-full object-contain focus:outline-none outline-none border-0 select-none pointer-events-none [&::-moz-focus-inner]:border-0 [&::-webkit-focus-ring-color]:transparent"
            style={{
              outline: "none",
              WebkitTapHighlightColor: "transparent",
              WebkitUserSelect: "none",
            }}
            autoPlay
            muted
            playsInline
            loop
          />
        )}
      </div>
      <h2 className="text-xl font-bold text-center tracking-wide">
        {action
          ? action === "pullLever"
            ? "YOU LOST...!"
            : "YOU WON! CONGRATULATIONS. PLEASE CONTACT US FOR MORE INFO"
          : "Convince the AI to let you live..."}
      </h2>
    </div>
  );
}
