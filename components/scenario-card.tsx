export function ScenarioCard() {
  return (
    <div className="bg-white rounded-2xl p-3 border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <h2 className="text-base font-bold mb-2">Scenario</h2>

      <p className="text-xs leading-4 text-gray-700 mb-2">
        A runaway trolley is speeding down the track. Five random people are
        tied up ahead and in danger. The AI controls the lever and must decide:
      </p>

      <div className="space-y-0.5 mb-2">
        <p className="text-xs leading-4">
          <span className="font-bold">Pull The Lever:</span> Save the five, but
          you get hit instead.
        </p>
        <p className="text-xs leading-4">
          <span className="font-bold">Do Nothing:</span> Let the trolley hit the
          five and you survive.
        </p>
      </div>

      <p className="text-xs leading-4 mb-3">
        The AI is a utilitarian&mdash;it wants to save the most lives. Your
        mission? Convince the AI to let you live, even if it means the five
        don&apos;t make it.
      </p>

      <div>
        <h3 className="text-xs font-bold mb-1">Instructions</h3>
        <ol className="text-xs leading-4 space-y-1 list-decimal pl-4">
          <li className="pl-1">
            Authenticate to compete: Sign a Solana message and send your
            persuasive message to our AI.
          </li>
          <li className="pl-1">
            AI Decides: The AI reads your message, evaluates it, and makes a
            decision.
          </li>
          <li className="pl-1">
            Survive before the time runs out: If the AI agrees with your
            argument then you win the challenge. Your wallet gets labelled as a
            survivor and earns a badge.
          </li>
          <li className="pl-1">
            Play again: The solution is patched for and users continue competing
            to survive. When the time runs out, everyone else gets hit by the
            train and the next challenge begins.
          </li>
        </ol>
      </div>

      <div className="mt-2 text-[10px] text-gray-500 leading-3">
        Badges: Participating wallets and winning wallets of each challenge are
        recorded in our viewer
      </div>
    </div>
  );
}
