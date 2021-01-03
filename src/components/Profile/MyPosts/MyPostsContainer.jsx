import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {toLikeAC, toDislikeAC} from "../../../redux/profile-reducer";


/*Контейнерная компонента содержит данные о redux/state, чтобы не захламлять функциональную компоненту
   MyPostsContainer - контейнерная компонента, myPosts - функциональная
   Контейнерная компонента - обертка для функциональной
   мы можем без проблем использовать функциональную компоненту в других проектах
   ибо у нее нет привязки к данным
   Мы получаем данные и колбеки
   Презентационная/функциональная компонента чистая и не загружена ненужными данными*/
/*const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());

                }
                let onPostChange = (text) => {

                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    );
};*/
//при каждом изменении в state запускается эта функция и создается новый объект
//и сравнивается со старым
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))

        },
        addPost: () => {
            dispatch(addPostActionCreator())

        }


    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
//У connect есть локальный subscribe

export default MyPostsContainer;
