import React, { useEffect, useRef, useState } from 'react';
import classes from './Scroller.module.scss';

interface ScrollerProps {
    children?: React.ReactNode,
    className?: string
}
 
const Scroller: React.FC<ScrollerProps> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null)

    const [scrollerState, setScrollerState] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0
    })

    const onMouseUp = (e: any) => {
        if(ref && ref.current && !ref.current.contains(e.target)) {
            return
        }

        e.preventDefault()

        setScrollerState({
            ...scrollerState,
            isScrolling: false
        })
    }

    const onMouseDown = (e: any) => {
        if(ref && ref.current && !ref.current.contains(e.target)) {
            return
        }

        e.preventDefault()

        let cX = e.clientX

        setScrollerState({
            ...scrollerState,
            isScrolling: true,
            clientX: cX
        })
    }

    const onMouseMove = (e: any) => {
        if(ref && ref.current && !ref.current.contains(e.target)) {
            return
        }

        e.preventDefault()

        const {clientX, scrollX, isScrolling } = scrollerState

        if(isScrolling && ref.current) {

            /*
                P.S Much WORSE version
                P.P.S REUSE this scroller in every project it's AMAZING
                ref.current.scrollLeft = -(scrollX + e.clientX - clientX) 
            */
            
            ref.current.scrollTo({
                left: -(scrollX + e.clientX - clientX),
                behavior: 'smooth'
            })

            let sX = scrollX + e.clientX - clientX
            let cX = e.clientX
            setScrollerState({
                ...scrollerState,
                scrollX: sX,
                clientX: cX
            })
        }
    }
    
    useEffect(() => {
        const element = ref.current
        if (element) {
            const onWheel = (e: any) => {
                e.preventDefault()
                element.scrollTo({
                    left: element.scrollLeft + e.deltaY * 4,
                    behavior: 'smooth'
                })
            }

            element.addEventListener('wheel', onWheel)

            return () => element.removeEventListener('wheel', onWheel)
        }
    }, [])

    return (
        <div 
            ref={ref}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            className={[classes.scroller, className].join(' ')}
        >
            {children}
        </div>
    );
}
 
export default Scroller;