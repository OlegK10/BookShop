import { FC, useState } from "react";
import { ICategoryItemOnPage } from "../../../_TEST_TEMP/Category/ICategory";


const CategoryItem: FC<ICategoryItemOnPage> = ({ title }) => {
    const [active, setActive] = useState<boolean>(false);
    const unic = title.toLocaleLowerCase();

    const handleToggleActive = () => {
        setActive((prev) => !prev)
    }
    return (
        <div>
            <label
                htmlFor={unic}
                onClick={handleToggleActive}
                className={`border-1 rounded-md w-40 h-10 flex items-center justify-center cursor-pointer ${active && 'border-m'}`}>{title}</label>

            <input type="checkbox" className="hidden" name="" id={unic} />
        </div>
    )
}

export default CategoryItem