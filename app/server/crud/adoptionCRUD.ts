import { DOMAIN } from "../domain";

const apiPath = `${DOMAIN}/adoption`;

export default class AdoptionAPI {
    static async getAdoption() {
        const res = await fetch(`${apiPath}/getAll`, {method : "GET"});
        const data = await res.json();
        if(!res.ok) return {error : data.message};
        return data;
    }

    static async deletePetByID(id : string) {
        const res = await fetch(`${apiPath}/delete`, {
            method: "DELETE",
            body: JSON.stringify({
                pet_id : id,
            }),
            headers: {"Content-Type": "application/json"},
        });
        const data = await res.json();
        if(!res.ok) return {error : data.message};
        return data;
    }

    static async createAdoption(
        added_user: string, 
        pet_id: number
    ) {
        const res = await fetch(`${apiPath}/createAdoption`, {
            method: "POST",
            body : JSON.stringify({
                added_user : added_user,
                pet_id : pet_id,
            }),
            headers: {"Content-Type": "application/json"},
        });
        const data = await res.json();
        if(!res.ok) return {error : data.message};
        return data;
    }

    static async updateAdoption(
        adoption_id: number,
    ) {
        const res = await fetch(`${apiPath}/updateAdoption`, {
            method: "PUT",
            body : JSON.stringify({
                id : adoption_id,
            }),
            headers: {"Content-Type": "application/json"},
        });
        const data = await res.json();
        if(!res.ok) return {error : data.message};
        return data
    }
}