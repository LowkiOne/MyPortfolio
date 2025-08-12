import { GrCertificate } from "react-icons/gr";
import "../styles/certificatePage.css";
import PdfViewer from "../components/PdfViewer";
import TruncatedText from "../components/TruncatedText";
import { useState } from "react";

import { CERTIFICATE_ARRAY } from "../data/certificateData";

function CertificatePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? CERTIFICATE_ARRAY.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === CERTIFICATE_ARRAY.length - 1 ? 0 : prev + 1
    );
  };

  const cert = CERTIFICATE_ARRAY[currentIndex];

  return (
    <>
      <ul id="certificate">
        <li>
          <div>
            <h3>{cert.title}</h3>
            <TruncatedText text={cert.description} limit={300} />
          </div>
          <div>
            <a
              href={cert.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span> {cert.title} Certificate </span>
              <span>
                <GrCertificate />
              </span>
            </a>
          </div>
          <PdfViewer />
        </li>
      </ul>
      <div className="certificate-navigation">
        <button onClick={goPrev}>&lt; Prev</button>
        <button onClick={goNext}>Next &gt;</button>
      </div>
    </>
  );
}

export default CertificatePage;
