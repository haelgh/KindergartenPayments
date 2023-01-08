import axios from 'axios'

const KID_BASE_REST_API_URL = 'http://localhost:8080/api/v1/kids';

class KidService {

    getAllKids(){
        return axios.get(KID_BASE_REST_API_URL)
    }

    createKid(kid){
        return axios.post(KID_BASE_REST_API_URL, kid)
    }

    getKidById(kidId){
        return axios.get(KID_BASE_REST_API_URL + '/' + kidId);
    }

    updateKid(kidId, kid){
        return axios.put(KID_BASE_REST_API_URL + '/' +kidId, kid);
    }

    deleteKid(kidId){
        return axios.delete(KID_BASE_REST_API_URL + '/' + kidId);
    }
}

export default new KidService();