import { baseurl } from "./baseUrl"
import { commonRequest } from "./commonStructure"

export const addMovies=async(body)=>{
    return await commonRequest('POST',`${baseurl}/movies`,body)
}

export const fetchMovies=()=>{
    return commonRequest('GET',`${baseurl}/movies`,)
}

export const deleteMovie=async(id)=>{
    return await commonRequest('DELETE',`${baseurl}/movies/${id}`,{})
}