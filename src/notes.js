import { Button, View } from "@aws-amplify/ui-react";
import { Amplify, Storage } from 'aws-amplify';
import { useState } from "react";

const Notes = () => {
    const [fileData, setFileData] = useState();
    const [fileStatus, setFileStatus] = useState(false);

    const uploadFile = async () => {
        const result = await Storage.put(fileData.name, fileData);
        Storage.list('') // for listing ALL files without prefix, pass '' instead
            .then(({ results }) => console.log(results))
            .catch((err) => console.log(err));
        setFileStatus(true);
        // console.log(21,result);
    };

    return (
        <View height="100vh" display="flex" justifyContent="center" alignItems="center">
            <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
            <Button onClick={uploadFile}>
                Upload Files lorem ipsum
            </Button>
            {fileStatus ? "FileUploaded successfully" : ""}
        </View>
    );
}

export default Notes;