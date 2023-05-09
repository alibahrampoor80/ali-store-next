import {useState} from "react";
import http from "../../../services/httpService.js";
import toast from "react-hot-toast";
import {useRouter} from "next/router";

const CommentForm = ({postId, responseTo, setOnReply}) => {
    const router = useRouter()
    const [commentValue, setCommentValue] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            content: commentValue,
            postId,
            responseTo,
        }
        console.log(data)
        http
            .post("/post-comment/save-comment", data)
            .then((res) => {
                setCommentValue("");
                if (setOnReply) setOnReply((open) => !open);

                toast.success(res.data.message);
                router.push({pathname: router.pathname, query: router.query}, undefined, {scroll: false})
            })
            .catch((err) => {
                toast.error(err?.response?.data?.message);
            });
    }
    return <>
        <form>
         <textarea
             className={'focus:ring-primary p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-700'}
             value={commentValue} onChange={(event) => setCommentValue(event.target.value)}
             placeholder={'نظرت رو برام بنویس'}/>
            <button
                className={'mt-4 mx-auto py-3 w-full sm:w-56 bg-violet-600 rounded-2xl text-white px-3 md:text-lg'}
                onClick={submitHandler}>ارسال
                نظر
            </button>
        </form>
    </>
}
export default CommentForm