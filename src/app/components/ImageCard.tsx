import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Image as ImageType } from '../../types'

interface ImageCardProps {
  image: ImageType
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image 
              src={image.src} 
              alt={`Image ${image.id}`} 
              layout="fill" 
              objectFit="cover"
              className="transition-transform hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {image.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

