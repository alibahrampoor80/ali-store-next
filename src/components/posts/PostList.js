import { ClockIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import PostInteraction from "@/components/posts/PostInteraction";
import {toPersianDigits} from "@/app/toPersianDigits";

const PostList = ({blogsData}) => {
    return <>
        {blogsData.map((blog, index) => {
                return <div key={index}
                            className={'col-span-6 md:col-span-3 lg:col-span-2 bg-white flex flex-col rounded-3xl p-2 max-h-[350px]'}>
                    {/*    image  */}
                    <div className={'aspect-w-16 aspect-h-9 mb-6'}>
                        <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                            <img src={blog.coverImage} alt=""
                                 className={'object-cover rounded-2xl w-full h-44 w-full h-full object-center object-cover block mb-4'}/>
                        </Link>
                    </div>
                    {/*    blog content*/}
                    <div
                        className="bg-gray-50 p-2 rounded-2xl flex flex-col w-full justify-between flex-1 ">
                        <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                            <h2 className={'mb-4 font-bold'}>{blog.title}</h2>
                        </Link>
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <img src="/img/javascript.png"
                                         className={'h-6 w-6 rounded-full ring-2 ring-white ml-2'} alt=""/>
                                    <span className={'text-sm'}>علی بهرامپور</span>

                                </div>

                                <Link href={`/blogs/${blog.category.englishTitle}`}>
                                    <span
                                        className={'text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-400 transition duration-500 hover:text-white cursor-pointer '}>
                                    {
                                        blog.category.title
                                    }
                                    </span>
                                </Link>
                            </div>
                            <PostInteraction blog={blog} isSmall={true}/>

                            <div className="flex items-center gap-x-1 text-gray-400 text-[10px]">
                                <ClockIcon className={'w-4 h-4 stroke-gray-400'}/>

                                <span>زمان مطالعه:</span><span>{toPersianDigits(blog.readingTime)}</span><span>دقیقه</span></div>
                        </div>
                    </div>

                </div>
            }
        )}

    </>
}
export default PostList
