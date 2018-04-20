import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };


export const bannerList = params => { return axios.get('/api/index/Banner/bannerList', { params: params }); };