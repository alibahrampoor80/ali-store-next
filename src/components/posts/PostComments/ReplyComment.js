import {Fragment} from "react";
import SingleComment from "@/components/posts/PostComments/SingleComment";

const ReplyComment = ({parentCommentId, comments,postId}) => {

    return comments.map((comment) => {
        return parentCommentId === comment.responseTo &&
         <div className={'mr-5'}>
           <Fragment key={comment._id}>
            <SingleComment comment={comment} postId={postId} />
            <ReplyComment comments={comments} parentCommentId={comment._id} postId={postId} />
          </Fragment>
         </div>
    })
}
export default ReplyComment