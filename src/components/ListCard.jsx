const ListCard = (props) => {
    return(
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl my-4 hover:bg-base-200">
                <figure className="bg-base-200"><img src={props.img} alt={props.title}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.discreption}</p>
                </div>
            </div>
        </>
    )
}

export default ListCard