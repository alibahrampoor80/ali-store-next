import {useState, Fragment} from "react";
import SingleComment from "@/components/posts/PostComments/SingleComment";
import CommentForm from "@/components/posts/PostComments/CommentForm";
import ReplyComment from "@/components/posts/PostComments/ReplyComment";

const PostComments = ({post}) => {
    return <>
        <h2 className={'font-black text-2xl mb-8'}>نظرات</h2>
        {
            post.comments.map((comment) => {
                return !comment.responseTo && comment.status === 2 &&
                    <Fragment key={comment._id}>
                        <SingleComment comment={comment} postId={post._id}/>
                        <ReplyComment
                            comments={post.comments} parentCommentId={comment._id}
                            postId={post._id}/>
                    </Fragment>
            })
        }
        {/*  base comment form  */}
        <div className={'mt-8'}>
            <span className={'font-bold md:text-lg5'}>ارسال نظر جدید </span>

            <CommentForm postId={post._id} responseTo={null}/>

        </div>
    </>
}
export default PostComments