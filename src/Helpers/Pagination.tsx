import React, { FC, useState } from 'react'

interface IPagination {
    count: number;
    perPage: number;
}

const Pagination: FC<IPagination> = ({ perPage, count }) => {
    const pageCount = Math.ceil(count / perPage);

    return (
        pageCount > 1 ? (
            <div className='flex justify-center mt-3 relative'>
                <div className='flex cursor-pointer overflow-hidden rounded-full'>
                    <div className='px-2 py-1 bg-dark_1  hover:bg-m'>{`<`}</div>

                    {Array.from({ length: pageCount > 3 ? 3 : pageCount - 1 }, (_, i) => (
                        <div className='px-3 py-1 bg-dark_1 hover:bg-m ' key={i + 'pag'}>{i + 1}</div>
                    ))}

                    <div className='px-2 py-1 bg-dark_1  hover:bg-m'>{`>`}</div>
                </div>
            </div>
        ) : <></>
    )
}
export default Pagination