const url = process.env.PUBLIC_URL + "./assets/icon-list.svg"


export const List =({text})=>{
    return <li>
        <img className="md:mb-1" src={url} alt="icon-list"/>
        <h4>{text}</h4>
    </li>
}