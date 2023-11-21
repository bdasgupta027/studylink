import { Button, View } from "@aws-amplify/ui-react";
import { Storage } from 'aws-amplify';
import { useState } from "react";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Notes = () => {
    const [fileData, setFileData] = useState(null);
    const [fileStatus, setFileStatus] = useState(false);
    const [signedUrl, setSignedUrl] = useState('');

    const uploadFile = async () => {
        const result = await Storage.put(fileData.name, fileData);
        Storage.list('')
            .then(({ results }) => {
                console.log(results);
                const key = results[21].key; // Assuming results[2] contains the image key

                // Generate signed URL for displaying the image
                Storage.get(key)
                    .then(async (signedURL) => {
                        setSignedUrl(signedURL);
                        console.log("hello: ", signedURL); // For debugging or further use
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        setFileStatus(true);
    };

    return (
        <View height="100vh" display="flex" direction="column" justifyContent="center" alignItems="center">
            <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
            <Button onClick={uploadFile}>
                Upload Files
            </Button>
            {fileStatus && signedUrl && (
                <div>
                    <p>File Uploaded Successfully</p>
                    {/* Use signedUrl instead of "./hw6.pdf" */}
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer fileUrl={signedUrl} />;
                    </Worker>
                </div>
            )}
        </View>
    );
}

export default Notes;
