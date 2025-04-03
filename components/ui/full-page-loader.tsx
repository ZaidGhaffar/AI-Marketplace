"use client"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface FullPageLoaderProps {
  isLoading: boolean
}

export function FullPageLoader({ isLoading }: FullPageLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-lg font-medium text-muted-foreground">Loading your experience...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 