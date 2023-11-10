const Photo = (props) => {
    return (
        <ul>
          <li>
            <img src={props.url} alt={props.title} />
          </li>
          
        </ul>
    )
}

export default Photo