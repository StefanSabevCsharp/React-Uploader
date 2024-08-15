import React, { useEffect } from 'react';

export default function File({ file }) {
 
    const uploadFilePath = `${file.filePath}`;

    return (
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <h3 className="text-center">{file.fileName}</h3>
                <img
                    src={file.filePath}
                    style={{ width: "100%", height: "auto", marginTop: "30px" , marginBottom: "30px"}}
                />
            </div>
        </div>
    );
}
