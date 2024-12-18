import { Image, Tag } from '../types'

const images: Image[] = [
  { id: 1, src: "/images/image1.jpg", tags: ["Eyes", "Female", "Beautiful (8)"] },
  { id: 2, src: "/images/image2.jpg", tags: ["Lips", "Male", "Attractive (7)"] },
  { id: 3, src: "/images/image3.jpg", tags: ["Nose", "Unisex", "Very Beautiful (10)"] },
  { id: 4, src: "/images/image4.jpg", tags: ["Chin", "Female", "Average (5)"] },
  { id: 5, src: "/images/image5.jpg", tags: ["Eyes", "Male", "Very Beautiful (10)"] },
  { id: 6, src: "/images/image6.jpg", tags: ["Lips", "Unisex", "Beautiful (8)"] },
]

const tags: Tag[] = [
  { category: "Feature", tags: ["Eyes", "Lips", "Nose", "Chin"] },
  { category: "Gender", tags: ["Male", "Female", "Unisex"] },
  { category: "Beauty Score", tags: ["Average (5)", "Attractive (7)", "Beautiful (8)", "Very Beautiful (10)"] },
]

export function getImages(): Image[] {
  return images
}

export function getTags(): Tag[] {
  return tags
}

