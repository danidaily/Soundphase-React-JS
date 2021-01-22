import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <div className={s.info}><ProfileInfo profile={props.profile}/></div>
            <div className={s.posts}>
                <MyPostsContainer store={props.store}

                />
            </div>
        </div>
    );
};

export default Profile;
