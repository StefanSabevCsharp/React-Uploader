import { useState } from "react";
import { uploadSingleFile } from "../../uploadService/uploadService";

export default function Upload() {
    const [file,setFile] = useState("");
    const [fileName,setFileName] = useState("");

    const onChangeHandler = (e) => {
       const selectedFile = e.target.files[0];
       if(selectedFile){
           setFile(selectedFile);
           setFileName(selectedFile.name);
       }
    }

    const formHandler = async (e) => {
        e.preventDefault();

        const response = await uploadSingleFile(file);
        console.log("response from formHandler");
        console.log(response);
    }

    return (
        <>
            <form onSubmit={formHandler}>
                <div className="mt-4">
                    <input className="form-control" type="file" id="formFile" onChange={onChangeHandler}/>
                    <button type="submit" className="btn btn-primary mt-3">Upload</button>
                </div>
            </form>
        </>
    );
}