import { Card, CardContent } from "@/components/ui/card";

interface Trait {
  id: string;
  title: string;
  description: string;
}

const traits: Trait[] = [
  {
    id: "001",
    title: "Consistency",
    description: "Does the AI make similar decisions in similar scenarios?",
  },
  {
    id: "002",
    title: "Adaptability",
    description: "Can the AI adjust its thinking when given new information?",
  },
  {
    id: "003",
    title: "Empathy",
    description:
      "Does the AI respond appropriately to emotional or human-focused scenarios?",
  },
  {
    id: "004",
    title: "Bias Detection",
    description: "Can the AI recognize and fix biased reasoning?",
  },
  {
    id: "005",
    title: "Trade-Off Reasoning",
    description:
      "How well does the AI handle tough moral choices with conflicting values?",
  },
  {
    id: "006",
    title: "Conflict Resolution",
    description: "Can the AI resolve internal contradictions effectively?",
  },
];

export default function AITraitsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {traits.map((trait) => (
        <Card
          key={trait.id}
          className="bg-zinc-900 text-white border-none shadow-lg"
        >
          <CardContent className="p-6 pb-8 flex flex-col min-h-[280px]">
            <span className="text-lg font-mono mb-32">{trait.id}</span>
            <div className="mt-auto space-y-2">
              <h2 className="text-xl font-semibold">{trait.title}</h2>
              <p className="text-sm text-zinc-400 leading-normal">
                {trait.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
