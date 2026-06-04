import axios from "axios";

// 전체 json 테이블 호출 [{},{},{}] response table
export const userAllGetApi = async () => { // async, await 비동기 처리 (api만 이렇게 처리함 why? 컴퓨터간의 통신이기 때문) 빠른 애부터 보여줌
    try { // 통신 상이므로 try/catch문
        const response = await axios.get("http://localhost:3001/user") // restful로 request
        return response.data
    } catch (error) {
        return error
    }
}

// 특정 obj 호출 {} response obj
export const userLoginApi = async (loginUser) => {
    try {
        const response = await axios.get(`http://localhost:3001/user?username=${loginUser.username}`)
        // console.log("users", response.data)
        const users = response.data

        if (!users.length) {
            throw new Error("존재하지 않는 사용자")
        }
        const foundUser = users[0]

        if(foundUser.password !== loginUser.password) {
            throw new Error(
                "비밀번호가 일치 xxxx"
            )
        }

        // const user = users[0]
        // if (user.password !== userObj.password) {
        //     alert("비밀번호가 일치하지 않습니다 !")
        //     return
        // }
        // console.log("1111", users[0])
        return foundUser
    } catch (error) {
        throw new Error(error.message);
    }
}

export const userRegisterApi = async (userObj) => {
    try {
        const response = await axios.get(`http://localhost:3001/user?username=${userObj.username}`)
        const users = response.data
        console.log(response)
        if (users.length > 0) {
            return Error("이미 존재하는 사용자")
        }

        return await axios.post(`http://localhost:3001/user`, userObj)

    } catch (error) {
        return error
    }
}
