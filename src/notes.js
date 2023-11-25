import { Button, View } from "@aws-amplify/ui-react";
import { Storage } from 'aws-amplify';
import { useState } from "react";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
// Import styles
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const Notes = () => {
    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;
    const [fileData, setFileData] = useState(null);
    const [fileStatus, setFileStatus] = useState(false);
    const [signedUrl, setSignedUrl] = useState([]);

    const uploadFile = async () => {
        // let n = "group1/" + fileData.name
        // console.log(n);
        // const result = await Storage.put(n, fileData);
        Storage.list('group1/')
            .then(({ results }) => {
                console.log(results);
                for (let i = 0; i < results.length; i++) {
                    const key = results[i].key; 

                    // Generate signed URL for displaying the image
                    Storage.get(key)
                        .then(async (signedURL) => {
                            setSignedUrl(prevUrls => [...prevUrls, signedURL]);
                            console.log("hello: ", signedURL); // For debugging or further use
                        })
                        .catch((err) => console.log(err));
                }
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
                    <p marginBottom>File Uploaded Successfully</p>
                    {
                        signedUrl.map((url, index) => (
                            <div key={index}
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    width: "50vw",
                                    height: "50vh",
                                    marginTop: "100px",
                                    marginBottom: "100px"
                                }}
                            >
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                                    <Toolbar />
                                    <Viewer fileUrl={url} plugins={[toolbarPluginInstance]} />;
                                </Worker>
                            </div>
                        ))
                    }
                </div>
            )}
        </View>
    );
}

export default Notes;