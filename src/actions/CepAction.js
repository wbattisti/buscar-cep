import { API,GET } from "../actions/types";

export const BUSCARCEP = 'BUSCARCEP';
export const CEP_REQUEST = 'CEPREQUEST';
export const DISPLAYCEP = 'DISPLAYCEP';
export const INITIALIZE = 'INITIALIZE';


export const getCep = (cep) =>({
    type: API,
    method:GET,
    url: "https://viacep.com.br/ws/" + cep + "/json/",
    onRequest:requestCep,
    onSuccess:displayCep,
});
export const requestCep = () =>({
    type: CEP_REQUEST,
});    
export const displayCep = data =>({
    type: DISPLAYCEP,
    dadosCep: data,
});    



