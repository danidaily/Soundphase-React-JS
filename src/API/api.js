import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "003349ef-7a6d-49ce-a4aa-a4681e22169c"
    }
}) //instance "склеивает" baseURL с тому, что передается в аргументе запроса
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => {
            return response.data
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`
        )
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)

    }

}


/*

export const deleteUsers = (u = 1) => {
    return instance.delete(`follow/${u.id}`)
        .then(data => {
            if (data.resultCode === 0) {
                data.unfollow(u.id)
            }

        });
}
export const postUsers = (u = 1) => {
    return instance.post(`follow/${u.id}`)
        .then(data => {
            if (data.resultCode === 0) {
                data.follow(u.id)
            }

        });
}

*/
