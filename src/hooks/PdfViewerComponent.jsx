import { Viewer, Worker } from '@react-pdf-viewer/core';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar';
import { CornerUpLeft } from 'lucide-react';

const PdfViewerComponent = () => {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex  items-center bg-gray-100 border-b border-gray-300 p-1">
        <Toolbar>
          {(props) => {
            const {
              CurrentPageInput,
              Download,
              EnterFullScreen,
              GoToNextPage,
              GoToPreviousPage,
              NumberOfPages,
              Print,
              ZoomIn,
              ZoomOut,
            } = props;
            console.log('number of pages:', NumberOfPages());
            return (
              <div className="flex items-center gap-2 justify-between w-full px-8">
                {/* Grupo Izquierdo: Paginación */}
                <div>
                  <a
                    href="/"
                    className="flex gap-1 text-[hsl(var(--primary))] px-2 py-1 "
                  >
                    {' '}
                    <CornerUpLeft />{' '}
                    <span className="hidden md:block">to Home</span>
                  </a>
                </div>

                <div className="flex items-center space-x-2">
                  <GoToPreviousPage />
                  <div className="flex gap-2 items-center">
                    <CurrentPageInput /> <span> / </span>
                    <NumberOfPages />
                  </div>
                  <GoToNextPage />
                </div>

                {/* Grupo Central: Zoom */}
                <div className="flex items-center space-x-2">
                  <ZoomOut />
                  <ZoomIn />
                </div>

                {/* Grupo Derecho: Acciones */}
                <div className="flex items-center space-x-2 ">
                  <Download />
                </div>
              </div>
            );
          }}
        </Toolbar>
      </div>
      <div className="flex-1 overflow-hidden">
        <Worker workerUrl="/src/scripts/pdf.worker.min.js">
          <Viewer
            plugins={[toolbarPluginInstance]}
            fileUrl={'/src/pdf/CV_Diego_Hanssel_Perez.pdf'}
          ></Viewer>
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewerComponent;
