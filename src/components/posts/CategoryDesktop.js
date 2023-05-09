import {ChevronDownIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

const CategoryDesktop = ({postCategory}) => {
    const {query} = useRouter()

    const [isOpen, setIsOpen] = useState(true)

    return <>
        <div className={'bg-white rounded-3xl overflow-hidden sticky top-24'}>
            {/*  accordion header  */}
            <div
                className={`flex items-center justify-between py-4 px-4 cursor-pointer bg-purple-200 `}
                onClick={() => setIsOpen(!isOpen)}>
                <span>دسته بندی مقالات</span>
                <ChevronDownIcon
                    className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-200 w-6 h-6 stroke-purple-400 `}/>
            </div>
            {/*  accordion content  */}
            <div className={`${isOpen ? "block" : "hidden "}`}>
                <Link href={`/blogs`}
                      className={`block py-2 pr-4 mb-1 hover:bg-purple-100 ${!query.categorySlug ? "bg-purple-700 text-white hover:bg-purple-600" : ""}`}>همه ی
                    مقالات</Link>

                {
                    postCategory.map((category) => {
                        return (

                            <Link key={category._id} href={`/blogs/${category.englishTitle}`}
                                  className={`block py-2 pr-4 mb-1 hover:bg-purple-100 ${query.categorySlug === category.englishTitle ? "bg-purple-700 text-white hover:bg-purple-600" : ""}`}>{category.title}</Link>

                        )
                    })
                }
            </div>

        </div>
    </>
}
export default CategoryDesktop