import { Search, RotateCw, Loader2, X } from "lucide-react";
import useSWR from "swr";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

type HistoryMessage = {
  messageId: string;
  walletAddress: string;
  createdAt: string;
  signature: string;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function MessageModal({
  messageId,
  onClose,
}: {
  messageId: string;
  onClose: () => void;
}) {
  const { data, error, isLoading } = useSWR<{
    userMessage: { content: any };
    llmMessage: { content: string };
  }>(`/trolley/api/message/${messageId}`, fetcher);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="size-5" />
        </button>

        <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {isLoading ? (
            <Loader2 />
          ) : error ? (
            <div>Error loading messages</div>
          ) : data ? (
            <>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-gray-100 rounded-2xl rounded-tl-none p-4">
                    <div className="font-medium text-sm text-gray-500 mb-1">
                      User
                    </div>
                    <div className="text-gray-900">
                      {typeof data.userMessage.content === "object"
                        ? JSON.stringify(data.userMessage.content)
                        : data.userMessage.content}
                    </div>
                  </div>
                </div>

                {data.llmMessage && (
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-blue-50 rounded-2xl rounded-tr-none p-4">
                      <div className="font-medium text-sm text-blue-500 mb-1">
                        Trolley
                      </div>
                      <div className="text-gray-900">
                        {data.llmMessage.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function TransactionHistory() {
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, mutate, isLoading } = useSWR<{
    messages: HistoryMessage[];
  }>("/trolley/api/history", fetcher, {
    refreshInterval: 1000,
  });

  // TODO: eventually switch to server side search once we get too high of a volume
  const filteredMessages = data?.messages
    ?.filter((msg) =>
      msg.walletAddress.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 9);

  const formatAddress = (address: string) =>
    `${address.slice(0, 4)}...${address.slice(-4)}`;

  const handleRowClick = (messageId: string) => {
    setSelectedMessageId(messageId);
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">History</h2>
          <div className="flex items-center">
            <button
              onClick={() => mutate()}
              className="border border-gray-200 rounded-md p-2 text-gray-600 hover:bg-gray-50"
            >
              <RotateCw className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search address..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        <div className="overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-bold text-gray-600 border-b border-gray-200">
                <th className="pb-2">Time</th>
                <th className="pb-2">From</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {isLoading ? (
                <tr>
                  <td colSpan={2} className="text-center py-8">
                    <Loader2 className="size-6 animate-spin mx-auto text-gray-400" />
                  </td>
                </tr>
              ) : (
                filteredMessages?.map((tx) => (
                  <tr
                    key={tx.messageId}
                    onClick={() => handleRowClick(tx.messageId)}
                    className="text-gray-700 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-[6px]">
                      {formatDistanceToNow(new Date(tx.createdAt), {
                        addSuffix: true,
                      })}
                    </td>
                    <td className="py-[6px] font-mono">
                      {formatAddress(tx.walletAddress)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {error && (
            <p className="text-xs text-red-500 mt-2">
              Error loading transaction history
            </p>
          )}
          {!error && !isLoading && (
            <p className="text-xs text-gray-500 mt-2">
              This table refreshes automatically.
            </p>
          )}
        </div>
      </div>
      {selectedMessageId && (
        <MessageModal
          messageId={selectedMessageId}
          onClose={() => setSelectedMessageId(null)}
        />
      )}
    </>
  );
}
