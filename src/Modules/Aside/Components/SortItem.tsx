import React, { FC, useState } from 'react';
import { ISortItemOnPage } from '../../../_TEST_TEMP/Sort/ISort';

interface SortItemProps extends ISortItemOnPage {
    isActive?: boolean;
    onClick?: () => void;
}
const SortItem: FC<SortItemProps> = ({ title, isActive = false, onClick }) => {
    const unic = title.toLocaleLowerCase();
    return (
        <>
            <label
                onClick={onClick}
                htmlFor={unic}
                className={`border-1 p-1 w-full text-center cursor-pointer ${isActive ? 'border-m' : ''}`}
            >
                {title}
            </label>
            <input type="radio" className='hidden' name="" id={unic} />
        </>
    );
};

export default SortItem;
