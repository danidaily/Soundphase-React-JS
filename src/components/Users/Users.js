import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../Assets/photo.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {deleteUsers, getUsers, postUsers, usersAPI} from "../../API/api";

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
                        props.follow(u.id); //применяем thunk из users-reducer


                    }}> Unfollow </button>
                    : <button
                        disabled={props.followingInProgress.some(id => id === u.id)} //если followingInProgress == true, то задезейблим кнопку
                        onClick={() => {
                            props.unfollow(u.id);//применяем thunk из users-reducer

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