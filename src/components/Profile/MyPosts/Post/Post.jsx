import React from "react";
import s from "./Post.module.css";
import userPhoto from "../../../../Assets/photo.png";

const Post = (props) => {
    return (
        <div className="container">
            <div className={s.item}>
                <div>
                    <img
                        src={userPhoto}
                        className="img-circle"
                        alt="No image"
                        width="50px"
                        height="50px"
                    />
                </div>
                <div className="panel-body">
                    {props.message}
                </div>
                <div>
                    <span>{props.likesCount}</span>

                    <img
                        src="https://image.freepik.com/free-vector/red-heart-isolated-on-transparent-background-happy-valentine-s-day-greeting-template_11554-990.jpg"
                        className="img-circle"
                        alt="No image"
                        width="50px"
                        height="50px"
                    />
                    <button type="button" className="btn btn-primary"> Like</button>


                </div>
            </div>
            <div>

                <br/>
            </div>

        </div>


)
}

export default Post;
