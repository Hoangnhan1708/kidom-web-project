import axios from "axios";

export async function fetchData(url) {
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};