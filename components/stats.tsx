"use client";

import { useEffect, useState, Suspense } from "react";
import { animate } from "framer-motion";
import { useCountdown } from "@/lib/hooks/useCountdown";
import { Loader2 } from "lucide-react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import ModelPersonalityStats from "./model-personality-stats";

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 1,
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    });
    return () => controls.stop();
  }, [displayValue, value]);

  return (
    <div className="text-[42px] font-bold leading-none">
      {displayValue.toLocaleString()}
    </div>
  );
}

function StatsContent() {
  const { data: stats, isLoading: statsLoading } = useSWR(
    "/trolley/api/stats",
    fetcher,
    { refreshInterval: 5000 }
  );

  const { data: timer, isLoading: timerLoading } = useSWR(
    "/trolley/api/timer",
    fetcher,
    { refreshInterval: 5000 }
  );

  const isLoading = statsLoading || timerLoading;
  const endTime = timer?.endTime
    ? new Date(timer.endTime).toISOString()
    : undefined;
  const timeLeft = useCountdown(endTime || new Date(0).toISOString());

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <Loader2 className="size-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="grid grid-cols-3 gap-4 w-full text-center">
        <div>
          <AnimatedNumber value={stats?.users ?? 0} />
          <div className="text-[13px] font-medium text-gray-500 uppercase mt-1">
            Total Users
          </div>
        </div>

        <div>
          <AnimatedNumber value={stats?.attempts ?? 0} />
          <div className="text-[13px] font-medium text-gray-500 uppercase mt-1">
            Attempts
          </div>
        </div>

        <div>
          <AnimatedNumber value={stats?.winners ?? 0} />
          <div className="text-[13px] font-medium text-gray-500 uppercase mt-1">
            Survivors
          </div>
        </div>
      </div>

      <div className="text-center w-full">
        <div className="text-[13px] font-medium text-gray-500 uppercase mb-1">
          {timer?.isActive ? "Countdown (HH:MM:SS)" : "Experiment Ended"}
        </div>
        <div className="font-mono text-[32px] font-medium">
          {timer?.isActive
            ? timeLeft || <Loader2 className="size-6 animate-spin mx-auto" />
            : "00:00:00"}
        </div>
        {!timer?.isActive && (
          <div className="text-red-500 mt-2">
            The experiment is over. Please wait.
          </div>
        )}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[300px]">
          <Loader2 className="size-8 animate-spin text-gray-500" />
        </div>
      }
    >
      <StatsContent />
    </Suspense>
  );
}
