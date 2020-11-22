import {createBaseClient} from "./base";
import {TWITTER_API_URL} from "../constants";

const {get, post} = createBaseClient(TWITTER_API_URL)

const Twitter = {
    auth: () => post("/statuses/update.json?status=Hello%20world"),
    getRateStatusLimit: () => get("/application/rate_limit_status.json"),
    getStatusLookup: () => get('/statuses/lookup.json'),
}

export default Twitter;
