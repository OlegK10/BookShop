import Icon from "../Icons/Icon"
import { IconsEnum } from "../Icons/IconsEnumList"
import Categories from "./Components/Categories"
import Sort from "./Components/Sort"

const Aside = () => {
    return (
        <aside className="fixed left-0 w-96 flex h-full ml-4 items-center justify-center ">
            <div className="w-full h-p bg-l2 rounded-md p-2 px-4 shadow-md">
                <div className="flex justify-between items-center border-b-1 pb-2">
                    <div >BOOK ORODER SYSTEM</div>
                    <div className="flex gap-1">
                        <div className="bg-l1 rounded-full p-1 text-lg cursor-pointer hover:scale-95"><Icon type={IconsEnum.USER} /></div>
                        <div className="bg-l1 rounded-full p-1 text-lg relative cursor-pointer hover:scale-95">
                            <div className="absolute -right-1 rounded-full -top-1 text-sm">2</div>
                            <Icon type={IconsEnum.CART} />
                        </div>
                    </div>
                </div>

                <label htmlFor="search" className="flex justify-center mt-4 cursor-pointer">
                    <div className="flex items-center justify-between w-52 border-b-1 border-d1 pb-1 pl-2">
                        <input type="text" placeholder="Search" className="w-full bg-l2" id="search" />
                        <div><Icon type={IconsEnum.SEARCH} /></div>
                    </div>
                </label>

                <div className="mt-14">
                    <Categories />

                    <Sort />
                </div>


            </div>
        </aside>
    )
}

export default Aside