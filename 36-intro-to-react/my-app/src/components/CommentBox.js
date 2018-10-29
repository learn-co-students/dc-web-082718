import React from 'react'
import Comment from './Comment'

const commentData = [
  {id: 1, content: "hello world", author: "Sam"},
  {id: 2, content: "cool app", author: "Bruno"},
  {id: 3, content: "hey", author: "Ann"}
]

const CommentBox = () => {
    return (
      <div className="comment-box">CommentBox
        {commentData.map((comment) => <Comment
          key={comment.id}
          comment={comment}
        />)}
      </div>
    )
}

// class CommentBox extends React.Component {
//   render(){
//     return <div className="comment-box">CommentBox</div>
//   }
// }

export default CommentBox
