import {ChatBubbleBottomCenterTextIcon, HeartIcon, BookmarkIcon} from "@heroicons/react/24/outline";
import {BookmarkIcon as SolidBookmarkIcon, HeartIcon as HeartIconSolid} from "@heroicons/react/20/solid";
import {toPersianDigits} from "@/app/toPersianDigits";
import http from "../../services/httpService";
import {useRouter} from "next/router";
import toast from "react-hot-toast";

const PostInteraction = ({blog, isSmall, className}) => {
    const router = useRouter()
    const iconSize = `${isSmall ? "h-4 w-4" : "h-6 w-6"}`;
    const likeHandler = (postId) => {
        http.put(`/posts/like/${postId}`).then(({data}) => {
            router.push({pathname: router.pathname, query: router.query}, undefined, {scroll: false})
            toast.success(data.message)
        }).catch(err => {
            toast.error(err?.response?.data?.message)
        })
    }
    const bookmarkHandler = (postId) => {
        http.put(`/posts/bookmark/${postId}`).then(({data}) => {
            router.push({pathname: router.pathname, query: router.query}, undefined, {scroll: false})
            toast.success(data.message)
        }).catch(err => {
            toast.error(err?.response?.data?.message)
        })
    }
    return <>
        <div className={`flex items-center ${isSmall ? "gap-x-2" : "gap-x-4"} ${className}`}>
            <button
                className="flex items-center bg-gray-200 transition duration-300 px-1 py-0.5 rounded gap-x-1">
                <ChatBubbleBottomCenterTextIcon className={`${iconSize} stroke-gray-500`}/>
                <span
                    className={'text-xs text-gray-500 font-bold leading-3 '}>{toPersianDigits(blog.commentsCount)}</span>
            </button>
            <button
                onClick={() => likeHandler(blog._id)}
                className="bg-red-100 p-0.5 rounded flex items-center gap-x-1 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">

                {
                    blog.isLiked ? (<HeartIconSolid className={`${iconSize} fill-current`}/>) :
                        (<HeartIcon className={` ${iconSize} stroke-current`}/>)
                }
                <span className="block text-xs font-bold leading-3">{toPersianDigits(blog.likesCount)}</span></button>
            <button onClick={() => bookmarkHandler(blog._id)}
                    className="flex items-end bg-blue-100 hover:bg-blue-500 transition duration-300 hover:text-white px-1 py-0.5 rounded text-blue-500">
                {
                    blog.isBookmarked ? <SolidBookmarkIcon className={`${iconSize} fill-current`}/> :
                        <BookmarkIcon className={`${iconSize} stroke-current`}/>
                }

            </button>
        </div>
    </>
}
export default PostInteraction