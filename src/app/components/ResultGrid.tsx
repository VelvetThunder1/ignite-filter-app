import React from 'react'
import ImageCard from './ImageCard'
import { Skeleton } from "@/components/ui/skeleton"
import { Image } from '../../types'

interface ResultGridProps {
  images: Image[]
}

export default function ResultGrid({ images }: ResultGridProps) {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Results</h2>
        <p className="text-sm text-muted-foreground">{images.length} images found</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.length > 0 ? (
          images.map(image => <ImageCard key={image.id} image={image} />)
        ) : (
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-[200px] w-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

