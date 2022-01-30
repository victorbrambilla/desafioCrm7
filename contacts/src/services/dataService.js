import axios from 'axios'


const url = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('token');
const instance = axios.create({
    baseURL: url,
    //params: {token},
    headers:{'Authorization': `Bearer ${token}`}
  });

instance.interceptors.request.use(
    (req) => {
       return req;
    },
    (err) => {
        console.log(err)
       return Promise.reject(err);
    }
 );
 
 // For POST requests
 instance.interceptors.response.use(
    (res) => {
        console.log(res)
        if(res.data.data[0].code==='DUPLICATE_DATA'){
            alert('Contact already exist!')
            return Promise.reject()
        }
       return res;
    },
    (err) => {
        console.log(err.response)
        if(err.response.data.code === "INVALID_REQUEST"){
            localStorage.removeItem('token');
            window.location.reload()   
        }
       return Promise.reject(err);
    }
 );

export const dataService = {
    
    getContacts: async () => {
        
        let res = await instance.get(`/contacts`)
        return res.data.data;
        
    },

    getContact: async (id) => {
        let res = await instance.get(`/Contacts/${id}`)
        .catch(error=>{
            console.log(error.response.data.message)
        })
        return res.data.data;
    },


    createContact: async (data) => {
        let res = await instance.post('/Contacts',{
            'data':[data]
        })
        return res.data.data
    },
    
    updateContact: async (id, data)=>{
        let res = await instance.put(`/Contacts/${id}`,{
            'data':[data]
        })
        return res.data.data
    },
    
    deleteContact: async (id)=>{
        let res = await instance.delete(`/Contacts/${id}`, {
        })
        return res.data
    },

    deleteAllContacts: async (ids)=>{
        let res = await instance.delete(`/Contacts?ids=${ids}`, {
        })
        return res.data
    }
}