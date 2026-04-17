const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCampers = async (page = 1, limit = 4) => {
    const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to fetch campers');
    }
    return response.json();
};


