import { variables } from "../variables";
import { http } from "./http";
import { http_requests } from "./http-requests";

export const global_requests = {
    async getDepartments() {
        let response = await http.network(
            variables.GET,
            http_requests.GET_DEPARTMENTS
        );
        return response.result.data.departments;
    },
}