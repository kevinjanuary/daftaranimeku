const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        })
    }

    const handlePrevPage = () => {
        setPage((currentState) => currentState - 1)
        scrollTop()
    }
    const handleNextPage = () => {
        setPage((currentState) => currentState + 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4">
            { page <= 1 ? null :
                <button onClick={handlePrevPage} className="hover:text-yellow-400">Prev</button>
            }
            <p>{page} of {lastPage}</p>
            { page >= lastPage ? null :
                <button onClick={handleNextPage} className="hover:text-yellow-400">Next</button>
            }
        </div>
    )
}

export default Pagination