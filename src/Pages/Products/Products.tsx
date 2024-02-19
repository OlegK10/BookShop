import { useEffect, useState } from "react"
import Pagination from "../../Helpers/Pagination"
import ProductItem from "./ProductItem"

const Products = () => {
    const [books, setBooks] = useState<[]>()

    return (
        <div className='relative bg-l2 h-p p-2 overflow-x-hidden rounded-md w-full shadow-md overflow-y-scroll '>
            <div className=' border-b-1 pb-2'>PRODUCTS</div>

            <div className='mt-4 flex flex-wrap gap-4 '>
                {Array.from({ length: 2 }).map((_, index) => (
                    <ProductItem key={index} bookName="Book name" price={150} author="Charles Dickens" image="/" year={1996} />
                ))}

            </div>
            <div className="absolute bg-l2 bottom-0 z-10 w-full py-4 flex justify-center">
                <div className="flex">
                    <Pagination count={40} perPage={5} />
                </div>
            </div>
        </div>
    )
}

export default Products