import {AdjustmentsVerticalIcon} from "@heroicons/react/20/solid";
import {useState} from "react";
import {useRouter} from "next/router";

const sortOption = [
    {label: "پربازدیدترین", id: "most"},
    {label: "محبوب ترین", id: "popular"},
    {label: "جدیدترین", id: "newest"},
]

const SortBar = () => {
    const router = useRouter()
    const [sort, setSort] = useState(router.query.sort || "newest")
    const sortHandler = (id) => {
        setSort(id)
        router.query.sort = id
        router.push({pathname: router.pathname, query: router.query}, undefined, {scroll: false})
    }

    return <>
        <div className="bg-white rounded-3xl px-4 flex items-center">
            <div className="flex gap-x-2 items-center ml-4">
                <AdjustmentsVerticalIcon className={'w-6 h-6'}/>
                <span>مرتبط سازی :</span>
            </div>
            <ul className={'flex items-center gap-x-4'}>
                {
                    sortOption.map(({id, label}) => {
                        return (
                            <li
                                className={`cursor-pointer text-gray-700 relative py-4 ${id === sort ? "text-purple-700 font-bold" : ""}`}
                                key={id}
                                onClick={() => sortHandler(id)}
                            >
                                {label}
                                {id === sort && (
                                    <span
                                        className="h-[3px] bg-purple-700 w-8 rounded absolute right-0 bottom-0"></span>
                                )}
                            </li>
                        );
                    })
                }
            </ul>

        </div>
    </>
}
    export default SortBar