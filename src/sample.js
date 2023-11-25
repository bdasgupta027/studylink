import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { OpenFile, Viewer } from '@react-pdf-viewer/core';
import { SelectionMode } from '@react-pdf-viewer/selection-mode';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import Display from "./RAC4.pdf";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const ToolbarOptionsExample = ({ fileUrl }) => {
    const toolbarPluginInstance = toolbarPlugin({
        getFilePlugin: {
            fileNameGenerator: (file) => {
                const fileName = file.name.substring(file.name.lastIndexOf('/') + 1);
                return `a-copy-of-${fileName}`;
            },
        },
        searchPlugin: {
            keyword: 'PDF',
        },
        selectionModePlugin: {
            selectionMode: SelectionMode.Hand,
        },
    });
    const { Toolbar } = toolbarPluginInstance;

    return (
        <div
            className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '4px',
                }}
            >
                <Toolbar />
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Toolbar />
                    <Viewer fileUrl={Display} plugins={[toolbarPluginInstance]} />
                </Worker>
            </div>
        </div>
    );
};

export default ToolbarOptionsExample;
