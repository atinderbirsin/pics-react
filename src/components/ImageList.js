import ImageShow from "./ImageShow"

export default function ImageList({ images }) {
    const renderedList = images.map(image => <ImageShow key={image.id} image={image}/>)
    return (
        <div className="columns-xs w-full px-10">
            {renderedList}                       
        </div>
    )
}