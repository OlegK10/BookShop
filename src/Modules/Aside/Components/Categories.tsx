import CategoryItem from "./CategoryItem"

const Categories = () => {


    return (
        <>
            <div className="text-xl border-b-1">Categories</div>
            <div className="flex flex-wrap gap-1 mt-2">
                <CategoryItem title="Category 1"/>
                <CategoryItem title="Category 2"/>
                <CategoryItem title="Category 3"/>
                <CategoryItem title="Category 4"/>
            </div>
        </>
    )
}

export default Categories