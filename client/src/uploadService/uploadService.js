import axios from 'axios';

const baseUrl = 'http://localhost:5000/upload';

export const uploadSingleFile = async (file) => {

    const formData = new FormData();
    formData.append("file",file);
    
    try{
        const response = await axios.post(baseUrl,formData);
        console.log("response from uploadSingleFile");
        console.log(response);
        return response;

    }catch(err){
        console.error(err);
    }
}