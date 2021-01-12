import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } //если профиль null или undefined
    return (
        <div className="container">
            <div className="panel-default">
                <div className="panel-heading"><img src={props.profile.photos.small}
                                                    className={s.image}
                                                    alt="No image"
                                                    width="50px"
                                                    height="50px"/>
                    <div className="panel-body">

                        {props.profile.aboutMe}
                        <div>My contacts:
                            <ul>
                                <li> {props.profile.contacts.facebook}</li>
                                <li>{props.profile.contacts.twitter}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
};

export default ProfileInfo;
