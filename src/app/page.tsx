'use client'

import React, { useState } from 'react'
import Header from './components/Header'
import TagFilter from './components/TagFilter'
import ResultGrid from './components/ResultGrid'
import data from './data.json'

export default function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const filteredImages = data.images.filter(image => 
    selectedTags.length === 0 || selectedTags.every(tag => image.tags.includes(tag))
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
        <TagFilter tags={data.tags} selectedTags={selectedTags} onTagToggle={handleTagToggle}/>
        <ResultGrid images={filteredImages} />
        </div>
      </div>
    </div>
  )
}

