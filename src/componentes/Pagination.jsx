
export const Pagination = ({prev, next, onPrevious, onNext}) => {

    const previousPage = () => {
        onPrevious()
    }
    const nextPage = () => {
        onNext()
    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
                {
                    prev ?
                        <li className="page-item">
                            <button className="page-link text-info" onClick={ previousPage }>Previous</button>
                        </li>
                        :
                        null
                }
                {
                    next ?
                        <li className="page-item bg-black">
                            <button className="page-link bg-black text-info" onClick={ nextPage }>Next</button>
                        </li>
                        :
                        null
                }
            </ul>
        </nav>
    )
}
