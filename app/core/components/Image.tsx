import { getStrapiMedia } from "../../../lib/media"
import NextImage from "next/image"

const Image = ({ image }) => {
  const { alternativeText, width = 362, height = 213 } = image.data.attributes
  const base64url =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="

  return (
    <NextImage
      placeholder="blur"
      blurDataURL={base64url}
      priority={true}
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default Image
