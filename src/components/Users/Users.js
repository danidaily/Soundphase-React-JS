import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../Assets/photo.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {deleteUsers, getUsers, postUsers} from "../../API/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //получаем количество страниц,
    // деля общее кол-во на кол-во на странице и округляем до большего числа, чтобы показать все
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    } //помещаем в массив pages страницы
    return (
        <div>

            <div>
                {pages.map(p => {
                    return <span className=
                                     {props.currentPage === p && styles.selectedPage}
                                 onClick={(event) => {
                                     props.onPageChanged(p)
                                 }}>
                        {p}
                    </span>
                })}
            </div>


            {
                props.users.map(u => <div key={u.id}>
        <span>
            <div>
                        <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                              className={styles.userPhoto}/></NavLink>
            </div>
            <div>
                {u.isFollowed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.toggleFollowingProgress(true, u.id);
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "003349ef-7a6d-49ce-a4aa-a4681e22169c"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id);

                            });

                    }}> Unfollow </button>
                    : <button
                        disabled={props.followingInProgress.some(id => id === u.id)} //если followingInProgress == true, то задезейблим кнопку
                        onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "003349ef-7a6d-49ce-a4aa-a4681e22169c"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id);

                                });

                        }}> Follow </button>}
                    </div>
                    </span>
                    <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                    <div>
                    {u.country}
                    </div>
                    <div>
                    {u.city}

                    </div>
                    </span>
                    </span>
                </div>)
            }

        </div>
    )
}
export default Users;