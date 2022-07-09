

export const Characters = ({ characters }) => {
  return (
    <div className="row">
        {
            characters.map((item, index) => (
                <div key={ index } className="col mb-4">
                    <div className="card text-light" style={{minWidth: "200px", maxWidth:"400px"}}>
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <hr />
                            <p>Species: {item.species}</p>
                        </div>
                    </div>
                </div>
            ))}

    </div>
  )
}
