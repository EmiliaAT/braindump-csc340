import { CSSProperties, useState } from "react";
import axios from 'axios';
import CommentTypes from './comment.ts';

const CommentSection = (props: {articleId: number, commentUserName: string}) => {

    const sectionStyles = {
        border: "none",
        padding: "20px",
        margin: "40px 40px 60px 100px",
        width: "100%",
    };

    const cardStyles = {
            border: "1px solid hsl(0, 0%, 80%)",
            borderRadius: "10px",
            boxShadow: "5px 5px 5px hsla(0, 0%, 0%, .1)",
            padding: "5px 15px 15px 15px",
            margin: "10px",
            display: "inline-block",
            width: "70%",
        };
    const headerStyle = {
            margin: "5px 0 15px 5px",
            fontSize: "18px",
            display: "inline-block"
        };
    const bodyStyle = {
            backgroundColor: "gray",
            margin: "0",
            padding: "5px",
        };
    const cornerButtons: CSSProperties = {
            float: "right",
        };
    const addButtonStyle ={
            paddingLeft: "20px",
    };
    const inputStyle: CSSProperties = {
        width: "100%",
        backgroundColor: "gray",
        margin: "0",
        padding: "5px",
        boxSizing: "border-box",
        display: "block",
    };

    const [comments, setComments] = useState<CommentTypes[]>([]);
    const [editedCommentId, setEditedCommentId] = useState<number>(0);
    const [editedCommentText, setEditedCommentText] = useState<string>("");
    const [newCommentText, setNewCommentText] = useState<string>("");
    const [newCommentFlag, setNewCommentFlag] = useState<boolean>(false);

    const addComment = () => {
        setNewCommentFlag(true);
        setNewCommentText("");
        setEditedCommentId(0);
        setEditedCommentText("");
    };

    const saveNewComment = (articleId:number, commentUserName:string) => {
        const bodyData = {
            'commentBody': newCommentText,
            'articleId':articleId,
            'commentUserName':commentUserName,
            'createdTimestamp':"",
            'commentUserId':0
        };
        axios.post('http://localhost:8080/comment',bodyData);

        axios.get('http://localhost:8080/comments/'.concat(props.articleId.toString()))
             .then((response) => { setComments(response.data); } ); 

        setNewCommentFlag(false);
        setNewCommentText("");
    }

    const deleteComment = (commentId: number) => {
        axios.delete('http://localhost:8080/comment/'.concat(commentId.toString()));
    };
    
    const saveComment = () => {
        const bodyData = {
            'commentId': editedCommentId,
            'commentBody': editedCommentText,
        };
        axios.put('http://localhost:8080/comment/'.concat(editedCommentId.toString()),bodyData);
        
        axios.get('http://localhost:8080/comments/'.concat(props.articleId.toString()))
             .then((response) => { setComments(response.data); } ); 

        setEditedCommentId(0);
        setEditedCommentText("");
    };
    const editComment = (id:number, text:string, userName: string) => {

        if ((props.commentUserName == userName) && (text != "*** Deleted Comment ***")) {
            setEditedCommentId(id);
            setEditedCommentText(text);
        };
    };
    const cancelChange = () => {
        setNewCommentFlag(false);
        setNewCommentText("");
        setEditedCommentId(0);
        setEditedCommentText("");
    };
    const replyComment = (commentId: number) => {
        axios.delete('http://localhost:8080/comment/'.concat(commentId.toString()));
    };    

    axios.get('http://localhost:8080/comments/'.concat(props.articleId.toString()))
             .then((response) => { setComments(response.data); } ); 

    return (
        <div style={sectionStyles}>
            <div style={addButtonStyle}><button onClick={() => addComment()}>Add Comment</button></div>
            {(newCommentFlag ? (
            <div style={cardStyles}>
                <div>
                    <div style={headerStyle}>{props.commentUserName}</div>
                    <div style={cornerButtons}>
                        <button onClick={() => saveNewComment(props.articleId, props.commentUserName)}>Save</button>
                        <button onClick={cancelChange}>Cancel</button>
                    </div>
                </div>
                <input style={inputStyle} type="text" value={newCommentText} 
                onChange={(e) => setNewCommentText(e.target.value)} autoFocus={true} placeholder='Write a Comment' />
            </div>
            ) : (
                <div></div>
            ))}
        {comments.map((comment) => (
           (editedCommentId == comment.commentId ? (
            <div style={cardStyles}>
                <div>
                    <div style={headerStyle}>{comment.commentUserName} - Posted on {comment.createdTimestamp}</div>
                    <div style={cornerButtons}>
                        <button onClick={() => saveComment()}>Save</button>
                        <button onClick={cancelChange}>Cancel</button>
                    </div>
                </div>
                <input style={inputStyle} type="text" value={editedCommentText} 
                onChange={(e) => setEditedCommentText(e.target.value)} autoFocus={true}/>
            
            </div>
        ) : (
            <div style={cardStyles}>
                <div>
                    <div style={headerStyle}>{comment.commentUserName} - Posted on {comment.createdTimestamp}</div>
                    <div style={cornerButtons}>
                        <button onClick={() => editComment(comment.commentId, comment.commentBody,
                            comment.commentUserName)}>Edit</button>
                        <button onClick={() => deleteComment(comment.commentId)}>Delete</button>
                        <button onClick={() => replyComment(comment.commentId)}>Reply</button>
                    </div>
                </div>
                <div style={bodyStyle}>{comment.commentBody}</div>
            
            </div>
        ))
            
               
            ))
        }

        </div>
    );
};

export default CommentSection;