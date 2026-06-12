import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers:{
        "content-Type": "application/json"
    }
})

export const loginUser = async (email: string, password: string) => {
    const response = await api.post("/auth/login", {
        email,password
    });

    return response.data
    console.log("login-response", response)
}

// Create - POST
// Read - GET
// Update - PATCH/PUT
// Delete - DELETE