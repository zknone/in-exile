export const RetinaImage = (src: string, alt: string) => {
    const imageSet = `static/${src}-1.jpg 1x, static/${src}-2.jpg 2x`;
    return (
        <img srcSet={imageSet} alt={alt}/>
    )
}