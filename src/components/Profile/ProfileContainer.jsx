import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";

//контейнерный компонент для профиля
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        //если нет userID, то загружаем второго пользователя
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
                //this.props.setTotalUsersCount(response.data.totalCount); //получаем кол-во всех пользователей с сервера

            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}//получаем пропсы которые пришли
                //и добавить их в компонент
            />
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent);