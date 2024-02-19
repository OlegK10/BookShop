import { Fragment, useState } from "react"
import SortItem from "./SortItem"
import Icon from "../../Icons/Icon";
import { IconsEnum } from "../../Icons/IconsEnumList";

const Sort = () => {
    const [activeIndex, setActiveIndex] = useState<number | undefined>();
    const [activeSortType, setActiveSortType] = useState<string>('ASC');

    const sortItems = [
        'By Price',
        'By Name',
        'By Year',
        'By Author'
    ]

    const handleChangeActiveItem = (name: string) => {
        let index = sortItems.findIndex(item => item === name);

        setActiveIndex(index === activeIndex ? sortItems.length + 1 : index);
    }

    const handleChangeSortType = (sort: string) => {
        setActiveSortType(sort);
    }


    return (
        <>
            <div className="text-xl border-b-1 mt-2">Sort</div>

            <div className="flex mt-1 justify-center ">
                {sortItems.map((item, i) => (
                    <Fragment key={i + 'smac'}>
                        <SortItem title={item} onClick={() => handleChangeActiveItem(item)} isActive={i === activeIndex} />
                    </Fragment>
                ))}
            </div>

            <div className="flex justify-center mt-1">
                <div
                    className={`${activeSortType !== 'ASC' && "opacity-20"} cursor-pointer`}
                    onClick={() => handleChangeSortType('ASC')}>
                    <Icon type={IconsEnum.SORT_ASC} size={45} />
                </div>
                <div
                    className={`${activeSortType !== 'DESC' && "opacity-20"} cursor-pointer`}
                    onClick={() => handleChangeSortType('DESC')} >
                    <Icon type={IconsEnum.SORT_DESC} size={45} />
                </div>
            </div>
        </>

    )
}

export default Sort