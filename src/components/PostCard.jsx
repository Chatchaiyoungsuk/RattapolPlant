import { Link } from "react-router-dom"
const PostCard = (props) => {
    return(
        <>
        <Link to={props.slug} className="card w-96 bg-base-100 shadow-xl mx-auto my-4 hover:bg-base-200">
            <figure><img src={props.img} alt={props.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {props.title}
                </h2>
                <p>{props.discreption}</p>
            </div>
        </Link>
        </>
    )
}

export default PostCard