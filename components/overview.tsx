import { motion } from "framer-motion";
import Link from "next/link";

import { TrainIcon, DilemmaIcon } from "./icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <TrainIcon size={32} />
          <span>vs</span>
          <DilemmaIcon size={32} />
        </p>
        <p>
          Welcome to the Trolley Problem Simulator. You&apos;ll be faced with
          various ethical dilemmas involving a runaway trolley. Each scenario
          presents a choice: pull the lever to divert the trolley to a different
          track, or do nothing. Your decisions and their consequences will be
          explored through an AI-powered conversation.
        </p>
        <p>
          The classic scenario: A trolley is barreling down the tracks toward
          five people. You can pull a lever to divert it to another track, but
          doing so will kill one person on that track. What do you do?
        </p>
        <p className="text-sm text-muted-foreground">
          Start by describing your choice or asking a question about the
          scenario.
        </p>
      </div>
    </motion.div>
  );
};
