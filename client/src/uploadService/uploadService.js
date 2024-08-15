import axios from 'axios';

const baseUrl = 'http://localhost:5000/upload';

export const uploadSingleFile = async (file,setProgress) => {

    const formData = new FormData();
    formData.append("file",file);
    
    try{
        const response = await axios.post(baseUrl,formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(progress);
            }
        });
        const {fileName,filePath} = response.data;
        return {fileName,filePath};

    }catch(err){
        console.error(err);
    }
}