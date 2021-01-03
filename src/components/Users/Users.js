import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../Assets/photo.png";

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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
            <div>
                {u.isFollowed ? <button onClick={() => {

                        props.unfollow(u.id)
                    }}> Unfollow </button>
                    : <button onClick={() => {
                        props.follow(u.id)
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