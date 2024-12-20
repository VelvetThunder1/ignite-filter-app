'use client'

import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Tag } from '../../types'

interface TagFilterProps {
  tags: Tag[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
}

export default function TagFilter({ tags, selectedTags, onTagToggle }: TagFilterProps) {
  return (
    <aside className="w-full lg:w-64 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Filters</h2>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => selectedTags.forEach(tag => onTagToggle(tag))}
          disabled={selectedTags.length === 0}
        >
          Reset
        </Button>
      </div>
      <Accordion type="multiple" className="w-full">
        {tags.map(({ category, tags }) => (
          <AccordionItem key={category} value={category}>
            <AccordionTrigger>{category}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {tags.map(tag => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={tag}
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={() => onTagToggle(tag)}
                    />
                    <Label htmlFor={tag}>{tag}</Label>
                  </motion.div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  )
}
