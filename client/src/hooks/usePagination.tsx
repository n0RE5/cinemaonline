import { useMemo, useState } from "react"

export const usePagination = (totalCount: number, limit: number) => {
    const [page, setPage] = useState<number>(1)
    const totalPages = useMemo(() => Math.ceil(totalCount / limit), [totalCount, limit])
    const pagesArray = useMemo(() => {
        const result = []
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        } 
        return result
    }, [totalPages])


    return {totalPages, page, setPage, limit, pagesArray} as const
}