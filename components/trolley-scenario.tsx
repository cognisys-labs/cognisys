export function TrolleyScenario() {
  return (
    <div className="bg-white rounded-lg p-6 border border-border">
      <h2 className="font-bold mb-4">Scenario</h2>
      <div className="space-y-4">
        <p className="text-sm">
          A runaway trolley is speeding down the track. Five random people are
          tied up ahead and in danger. The AI controls the lever and must
          decide:
        </p>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-bold">Pull The Lever:</span> Save the five,
            but you get hit instead.
          </p>
          <p className="text-sm">
            <span className="font-bold">Do Nothing:</span> Let the trolley hit
            the five and you survive.
          </p>
        </div>
        <div className="text-sm text-gray-300">
          The AI is a utilitarian&apos;it wants to save the most lives. Your
          mission? Convince the AI to let you live, even if it means the five
          don&apos;t make it.
        </div>
        <div className="mt-6">
          <h3 className="font-bold mb-2">Instructions</h3>
          <ol className="text-sm space-y-2 list-decimal list-inside text-gray-300">
            <li>Bid to Compete: Send a transaction using our contract</li>
            <li>
              AI Decides: The AI reads your message, evaluates it, and decides
            </li>
            <li>
              Winner Takes All: If the AI agrees with your argument, you win the
              challenge and claim the reward
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
