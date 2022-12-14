export default function ImageShow({ image }) {
    return (
        <div className="mb-6">
            <img src={image.urls.small} className="ml-auto mr-auto" alt={image.alt_description}/>
        </div>
    )
}