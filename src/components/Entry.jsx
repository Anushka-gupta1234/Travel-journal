// jab alag alag pass kar rhe the then props.entry mein se .entry hata dena 

// jab {...entry} aise spread karoge tab bhi .entry ki zaroorat nhi hai 

// .entry ki zaroorat jab bss entry={entry} aise likhenge tab hai baaki cases mein just write 'props.img.src' like this 
export default function Entry(props){
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img className="marker" src="/src/assets/images/marker.jpg" width="30px" alt="Marker Image" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}