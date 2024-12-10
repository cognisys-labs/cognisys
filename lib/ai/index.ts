import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";

// Mock implementation for frontend demo
export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: {
      invoke: async () => {
        return {
          content:
            "This is a demo response. In a real implementation, this would be connected to an AI model.",
        };
      },
    },
    middleware: {},
  });
};
