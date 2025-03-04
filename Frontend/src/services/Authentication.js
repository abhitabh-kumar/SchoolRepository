import axios from "axios";

const baseURL = 'http://localhost:8080'

export const loginUser = async (username, password) => {
    try {
        // Make the API request to log in
        const credentials = btoa(`${username}:${password}`);
        const response = await axios.get(`${baseURL}/sign-in`, {
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        });
        if (response.data.code != "200") throw new Error(response.data.message);
        return response.data;
    } catch (error) {
        // console.log(error.response?.data);
        throw new Error(error.response?.data?.message || 'Something went wrong. Please try again !!');
    }
};

export const getOtp = async (email) => {
    try {
        const response = await axios.post(`${baseURL}/api/emails/generateOtp`, email, {
            headers: {
                "Content-Type": "text/plain",
            }
        });
        if (response.data.code != "200") throw new Error(response.data.message);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.message || error.response?.data?.message || 'Something went wrong while sending OTP!!');
    }
};

// Function to send a forgot password request
export const requestPasswordReset = async (email) => {
    try {
        const response = await axios.post(`${baseURL}/api/emails/send-reset-mail`, email, {
            headers: {
                "Content-Type": "text/plain",
            }
        });
        if (response.data.code != "200") throw new Error(response.data.message);
        return response.data;
    } catch (error) {
        throw new Error(error.message || error.response?.data?.message || 'OTP verified but something went wrong while sending mail');
    }
};

