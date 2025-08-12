import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function PdfViewer() {
  const [numPages, setNumPages] = useState(0);
  const [overlayOpen, setOverlayOpen] = useState(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="pdf-small" onClick={() => setOverlayOpen(true)}>
        <Document
          file="/UdemyAgileFundamentals.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={1}
            scale={0.5}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {overlayOpen && (
        <div className="pdf-overlay" onClick={() => setOverlayOpen(false)}>
          <div
            className="pdf-overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Document
              file="/UdemyAgileFundamentals.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (_, i) => (
                <Page
                  key={`page_${i + 1}`}
                  pageNumber={i + 1}
                  scale={0.5}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              ))}
            </Document>
          </div>
        </div>
      )}
    </>
  );
}

export default PdfViewer;
