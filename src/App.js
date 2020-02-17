import React from 'react';
import OhifViewerV2 from './ohif-viewer-v2';

function App() {
  return (
    <div>
      <OhifViewerV2 props={{
                routerBasename: '/',
                extensions: [],
                showStudyList: false,
                servers: {
                  dicomWeb: [
                    {
                      name: 'DCM4CHEE',
                      wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
                      qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
                      wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
                      studyInstanceUids: '1.2.826.0.13854362241694438965858641723883466450351448',
                      qidoSupportsIncludeField: true,
                      imageRendering: 'wadors',
                      thumbnailRendering: 'wadors',
                    },
                  ],
                },
              }}/>  
    </div>
  );
}

export default App;
