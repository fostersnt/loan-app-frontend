import { baseUrl } from "./general";

export const Login = async (msisdn) => {
    try {
        var responseData = {
            success: false,
            message: "Failed",
            data: null
        };
    
        const endpoint = `${baseUrl}`
    
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    
        const response = await fetch(endpoint, {
            method: "GET",
            headers: headers,
        });
    
        if (response.status == 200) {
            const responseBody = await response.json();
            responseData.success = true;
            responseData.message = "Success";
            responseData.data = responseBody['results'][0];
        }
    } catch (err) {
        responseData.message = err;
    }
    return responseData;
}