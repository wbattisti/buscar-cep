import axios from "axios";
import { API } from "../actions/types";

const apiMiddleware = ({ dispatch }) => next => action => {

    next(action);
    if (action.type !== API) return;

    const { 
        onSuccess, 
        onFailure, 
        onRequest,
        data,
        url,
        method,
        headers,
    } = action;

    dispatch(onRequest());
    
    // axios default configs
    //axios.defaults.baseURL = URL_VND;
    axios.defaults.headers.common["Content-Type"] = "application/json";

    axios
    .request({
        url: url,        
        method: method,
        data: data
    })
    .then(({ data }) => {
        dispatch(onSuccess(data));
    })
    .catch(error => {

        console.log(2);
        console.log(error);
        
        //dispatch(apiError(error));
        //dispatch(onFailure(error));

        if (error.response && error.response.status === 403) {
            //dispatch(accessDenied(window.location.pathname));
        }
    });        
};

export default apiMiddleware;
