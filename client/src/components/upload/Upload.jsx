import { useState } from "react";
import { uploadSingleFile } from "../../uploadService/uploadService";
import Success from "../success/Success";
import Progress from "../progress/Progress";
import File from "../file/File";
import ErrorMessage from "../errorMessage/ErrorMessage";

export default function Upload() {
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
    const [success, setSuccess] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [progress, setProgress] = useState(0);


    const onChangeHandler = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    }

    const formHandler = async (e) => {
        e.preventDefault();
        setProgress(0);

        if (!file) {
            return;
        }

        setLoading(true);
        try {
            const { fileName, filePath } = await uploadSingleFile(file, setProgress);
            setUploadedFile({ fileName, filePath: `/public/${filePath}` });
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 1000);

        } catch (err) {
         
            setErrorMessage(err.message);
            setTimeout(() => {
                setErrorMessage(null);
            }, 2000);
            
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {success && <Success />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <form onSubmit={formHandler}>
                <div className="mt-4">
                    <input className="form-control" type="file" id="formFile" onChange={onChangeHandler} />
                    <Progress progress={progress} />
                    <button type="submit" className="btn btn-primary mt-3">Upload</button>
                </div>
            </form>
            {uploadedFile && !loading && <File file={uploadedFile} />}
        </>
    );
}