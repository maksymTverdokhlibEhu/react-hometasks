class MealsApi {
    constructor(apiUrl) {
        this.url = apiUrl;
    }

    async getMany(
        { limit, page, category },
    ) {
        try {
            const res = await fetch(
                `${this.url}?limit=${limit}&page=${page}${category ? `&category=${category}` : ""}`,
                {
                    method: "GET",
                },
            );

            let data = null
            if (!res.ok || !res) {
                data = await res
                    .json()
                    .catch(() => null);
                return {
                    statusCode: res.status,
                    message: data.message,
                    data: null
                };
            }

            data = await res.json();
            return { statusCode: 200, data };
        } catch (error) {
            console.log(error);
            return { statusCode: 400, message: "Something went wrong", data: null };
        }
    }
}

const mealsApi = new MealsApi(import.meta.env.VITE_MEAL_API_URL);

export { mealsApi };
