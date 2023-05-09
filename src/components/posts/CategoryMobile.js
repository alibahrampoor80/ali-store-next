import Link from "next/link";
import {useRouter} from "next/router";

const CategoryMobile = ({postCategory}) => {
    const {query} = useRouter()
    return (
        <>
            <div className="flex md:hidden gap-x-4 overflow-auto pb-5">
                <Link

                    href={`/blogs`}
                    className={
                        `block border border-gray-500 text-gray-500 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-sm 
                         ${!query.categorySlug  ? "bg-purple-700 text-purple-700 bg-purple-100 border-2 border-purple-700" : ""}`
                    }
                >
                    همه ی مقالات
                </Link>
                {postCategory.map((category) => {
                    return (
                        <Link
                            key={category._id}
                            href={`/blogs/${category.englishTitle}`}
                            className={
                                `block border border-gray-500 text-gray-500 bg-white rounded-3xl px-3 py-1 whitespace-nowrap text-sm 
                                ${query.categorySlug === category.englishTitle ? "bg-purple-700 text-purple-700 bg-purple-100 border-2 border-purple-700" : ""}`
                            }
                        >
                            {category.title}
                        </Link>
                    );
                })}
            </div>
        </>
    );
};
export default CategoryMobile;
