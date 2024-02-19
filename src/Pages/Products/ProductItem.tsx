import { FC } from 'react'
import Icon from '../../Modules/Icons/Icon';
import { IconsEnum } from '../../Modules/Icons/IconsEnumList';
import { IBookInProductsPanel } from '../../Models/Book';

const ProductItem: FC<IBookInProductsPanel> =
    ({ bookName,
        price,
        author,
        year,
        image }) => {
        return (
            <div className="relative p-1 w-60 h-72 border-1 rounded-md overflow-hidden flex flex-col justify-between">
                <img src="" className='border-1 border-red-500 h-48 w-full rounded-sm' alt="book image" />
                <div className='font-light text-xl flex items-center justify-between'>
                    <div>{bookName}</div>
                    <div >${price}</div>
                </div>
                <div className='flex justify-between '>
                    <div className='text-base'>
                        <div >{author}</div>
                        <div >{year}</div>
                    </div>
                    <button className='flex items-center bg-green-300 py-1 px-3 rounded-sm hover:scale-95 '>
                        <div><Icon type={IconsEnum.CART} size={25} /></div>
                    </button>
                </div>
            </div>
        )
    }

export default ProductItem