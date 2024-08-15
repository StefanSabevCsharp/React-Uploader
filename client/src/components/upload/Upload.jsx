import { useState } from "react";
import { uploadSingleFile } from "../../uploadService/uploadService";
import Success from "../success/Success";

export default function Upload() {
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
    const [success, setSuccess] = useState(false);

    const onChangeHandler = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    }

    const formHandler = async (e) => {
        e.preventDefault();

        const response = await uploadSingleFile(file);

        if (response.status == 200) {

            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }
    }

    return (
        <>
            {success && <Success />}
            <form onSubmit={formHandler}>
                <div className="mt-4">
                    <input className="form-control" type="file" id="formFile" onChange={onChangeHandler} />
                    <button type="submit" className="btn btn-primary mt-3">Upload</button>
                </div>
            </form>
        </>
    );
}