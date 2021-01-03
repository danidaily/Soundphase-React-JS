import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It's my first post", likesCount: 12},
                {id: 2, message: "Noice", likesCount: 11},
                {id: 3, message: "Bienvenido", likesCount: 11},
                {id: 4, message: "Nene", likesCount: 11}
            ],
            newPostText: "What's on your mind?"
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dani"},
                {id: 2, name: "Kike"},
                {id: 3, name: "Alberto"},
                {id: 4, name: "Roma"},
                {id: 5, name: "Ivan"}
            ],
            messages: [
                {id: 1, message: "Hey"},
                {id: 2, message: "What's up"},
                {id: 3, message: "Hola"},
                {id: 4, message: "Nene"}
            ],
            newMessageBody: ''
        },
        friends: {
            name: [
                {id: 1, name: "Dani"},
                {id: 2, name: "Kike"},
                {id: 3, name: "Alberto"},
                {id: 4, name: "Roma"},
                {id: 5, name: "Ivan"}
            ], avas: [
                {ava: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg'},
                {ava: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg'},
                {ava: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'},
                {ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltvBEVwZUC1nI-q-4QnueJjvDFPOrHqBWig&usqp=CAU'},
                {ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu47Tzi-9snKDIgESxyXseGsGpnzPnssk5g&usqp=CAU'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        // {type: "ADD-POST"}
    }
}


export default store;
window.store = store;
// store - из мира ООП
