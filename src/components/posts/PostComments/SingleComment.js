import {UserIcon} from "@heroicons/react/24/outline";
import toLocalDate from "@/app/toLocalDate";
import {useState} from "react";
import CommentForm from "@/components/posts/PostComments/CommentForm";

const SingleComment = ({comment, postId}) => {
    const [onReply, setOnReply] = useState(false)

    return <>
        <div className={'rounded-xl mb-8 overflow-hidden shadow-lg border border-gray-100 bg-white'}>
            <div className={'flex items-center justify-start bg-gray-50 px-4 py-2'}>
                <UserIcon className={'h-12 w-12 stroke-gray-400'} strokeWidth={1}/>
                <div className={'flex flex-col justify-between mr-4 '}>
                    <span className={'block text-sm text-gray-600'}>{comment.writer?.name}</span>
                    <span className={'block text-xs text-gray-500 mt-2 dark:text-slate-500'}>
                        {toLocalDate(comment.createdAt)}
                    </span>
                </div>
            </div>
            <div className="px-4 pb-4">
                <div className={'mt-4 leading-10'}>
                    {comment.content}
                </div>
                <button className={'text-sm p-4 cursor-pointer text-blue-600'} onClick={() => setOnReply(!onReply)}>
                    {
                        !onReply ? "پاسخ به " : "بیخیال"
                    }
                </button>

                {
                    onReply &&
                    <div className={'mt-4'}>
                        <span className={'text-gray-500 text-sm'}>در حال پاسخ به {comment.writer?.name} </span>
                        <CommentForm postId={postId} responseTo={comment._id} setOnReply={setOnReply}/>
                    </div>
                }

            </div>
        </div>
    </>
}
export default SingleComment