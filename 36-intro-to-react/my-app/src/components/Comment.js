import React, {Component} from 'react'


const Comment = ({comment}) => {
  console.log(comment)
    return (
      <div className='comment'>
      {`${comment.content} - ${comment.author}`}
      </div>
    )
}

export default Comment
