"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, Power } from "lucide-react";

interface ModelPersonalityStatsProps {
  systemName: string;
  value: number;
  maxValue: number;
  unit: string;
  isOnline: boolean;
}

export default function ModelPersonalityStats({
  systemName,
  value,
  maxValue,
  unit,
  isOnline,
}: ModelPersonalityStatsProps) {
  const [localValue, setLocalValue] = useState(value);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (localValue > maxValue * 0.9) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [localValue, maxValue]);

  const percentage = (localValue / maxValue) * 100;

  const handleValueChange = (values: number[]) => {
    setLocalValue(values[0]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-black rounded-lg shadow-lg border border-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-mono text-white">[{systemName}]</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400 font-mono">POWER</span>
          <Switch
            checked={isOnline}
            disabled={true}
            className="data-[state=checked]:bg-green-500 cursor-not-allowed opacity-80"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-mono text-gray-400">STATUS:</span>
          <span
            className={`text-sm font-mono ${
              isOnline ? "text-green-400" : "text-red-400"
            }`}
          >
            {isOnline ? "ONLINE" : "OFFLINE"}
          </span>
        </div>

        <div className="relative h-8 bg-gray-900 rounded-md overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-mono text-white">
              {localValue.toFixed(2)} / {maxValue.toFixed(2)} {unit}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Power className="size-4 text-white" />
            <span className="text-xs font-mono text-gray-400">STATUS</span>
          </div>
          <AnimatePresence>
            {showAlert && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center space-x-1"
              >
                <AlertCircle className="size-4 text-white" />
                <span className="text-xs font-mono text-white">HIGH LOAD</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
