import React from "react";
import {
    toDislikeAC,
    toLikeAC
} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import Post from "Post"

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        toLike: (userId) => {
            dispatch(toLikeAC(userId))
        },
        toDislike: (userId) => {
            dispatch(toDislikeAC(userId))
        }

    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
//У connect есть локальный subscribe

export default PostContainer;

