import React, { useRef } from 'react';
import classes from './Pagination.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface PaginationProps {
    page: number
    pagesArray: number[]
    setPage: (arg0: number) => void
    totalPages: number
}
 
const Pagination: React.FC<PaginationProps> = ({ page, totalPages, pagesArray, setPage }) => {
    const ref = useRef<HTMLDivElement>(null)

    const handleClick = (selectedPage: number) => {
        setPage(selectedPage)
    }

    const handlePrev = () => {
        if(ref.current) {
            ref.current.scrollTo({
                left: ref.current.scrollLeft - 40,
                behavior: 'smooth'
            })
        }
    }

    const handleNext = () => {
        if(ref.current) {
            ref.current.scrollTo({
                left: ref.current.scrollLeft + 40,
                behavior: 'smooth'
            })
        }
    }

    if (totalPages < 2) {
        return null
    }

    return (
        <div className={classes.pagination}>
            <button onClick={handlePrev} className={classes.pagination_button__prev}>
                <IoIosArrowBack size={24} color="#444" />
            </button>
            <div ref={ref} className={pagesArray.length < 5 ? classes.pagination_fake_w : classes.pagination_w}>
                {pagesArray.map((item, index) =>
                    <button 
                        onClick={() => handleClick(item)} 
                        className={page === item ? [classes.pagination_button, classes.pagination_button__selected].join(' ') : classes.pagination_button} 
                        key={index}
                    >
                        {item}
                    </button>
                )}
            </div>
            <button onClick={handleNext} className={classes.pagination_button__next}>
                <IoIosArrowForward size={24} color="#444" />
            </button>
        </div>
    );
}
 
export default Pagination;