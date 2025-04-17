import React, { useState, useRef, useEffect } from 'react';    
import '../Css/Application.css';    
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';    
import { faAndroid } from '@fortawesome/free-brands-svg-icons';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { pdfjs } from 'react-pdf';    
import { Document, Page } from 'react-pdf';    
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';    
import research from '../Images/research.pdf';    
   
pdfjs.GlobalWorkerOptions.workerSrc = new URL(    
    'pdfjs-dist/build/pdf.worker.min.mjs',    
    import.meta.url    
).toString();    
    
export const Research = () => {    
    const [isHovered, setIsHovered] = useState(false);    
    const [numPages, setNumPages] = useState();    
    const [pageNumber, setPageNumber] = useState(1); // Default to page 1      
    const [inputPageNumber, setInputPageNumber] = useState(1); // Default to page 1      
    const [scale, setScale] = useState(1.5);    
    const [sliderValue, setSliderValue] = useState(1); // Default to page 1      
    const viewerRef = useRef(null);    
    
    useEffect(() => {    
        const handleKeyDown = (event) => {    
            if (event.key === 'ArrowLeft') {    
                handlePrevPage();    
            } else if (event.key === 'ArrowRight') {    
                handleNextPage();    
            }    
        };    
    
        window.addEventListener('keydown', handleKeyDown);    
    
        return () => {    
            window.removeEventListener('keydown', handleKeyDown);    
        };    
    }, [pageNumber, numPages]);    
    
    function onDocumentLoadSuccess({ numPages }) {    
        setNumPages(numPages);    
    }    
    
    const handleMouseEnter = () => {    
        setIsHovered(true);    
    };    
    
    const handleMouseLeave = () => {    
        setIsHovered(false);    
    };    
    
    const goToPage = (event) => {    
        const page = Number(event.target.value);    
        if (page >= 1 && page <= numPages) {    
            setPageNumber(page);    
            setInputPageNumber(page);    
            setSliderValue(page);    
        }    
    };    
    
    const handleSliderChange = (event) => {    
        const page = Number(event.target.value);    
        setSliderValue(page);    
    };    
    
    const handleInputPageChange = (event) => {    
        setInputPageNumber(event.target.value);    
    };    
    
    const handleKeyPress = (event) => {    
        if (event.key === 'Enter') {    
            const page = Number(event.target.value);    
            if (page >= 1 && page <= numPages) {    
                setPageNumber(page);    
                setSliderValue(page);    
            } else {    
                setInputPageNumber(pageNumber);    
            }    
        }    
    };    
    
    const zoomIn = () => {    
        setScale(scale + 0.1);    
    };    
    
    const zoomOut = () => {    
        setScale(Math.max(scale - 0.1, 0.5));    
    };    
    
    const toggleFullScreen = () => {    
        if (!document.fullscreenElement) {    
            viewerRef.current.requestFullscreen();    
        } else {    
            if (document.exitFullscreen) {    
                document.exitFullscreen();    
            }    
        }    
    };    
    
    const handlePrevPage = () => {    
        if (pageNumber > 1) {    
            setPageNumber(pageNumber - 1);    
            setInputPageNumber(pageNumber - 1);    
            setSliderValue(pageNumber - 1);    
        }    
    };    
    
    const handleNextPage = () => {    
        if (pageNumber < numPages) {    
            setPageNumber(pageNumber + 1);    
            setInputPageNumber(pageNumber + 1);    
            setSliderValue(pageNumber + 1);    
        }    
    };    
    
    return (    
        <div className="research-main">    
            <div style={{ width: '20%', textAlign: 'center' }}>    
                <h1 style={{ fontSize: '70px', transform: 'rotate(270deg)', transformOrigin: 'center bottom', marginLeft: '-20%', marginTop: '40%', color: '#283940' }}>Research</h1>    
            </div>    
            <div>    
                <ol>    
                    <li style={{ textDecoration: 'none', fontSize: '20px' }}>    
                        <a    
                            href='https://link.springer.com/chapter/10.1007/978-3-031-64064-3_17'    
                            style={{    
                                textDecoration: 'none',    
                                color: isHovered ? 'red' : 'black',    
                                display: 'inline-block',    
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',    
                                transition: 'transform 0.3s ease-in-out'    
                            }}    
                            onMouseEnter={handleMouseEnter}    
                            onMouseLeave={handleMouseLeave}    
                        >    
                            Data Agent-Based Volumetric Progress Monitoring over Mobile Ad-Hoc Network in Disaster Management <faHandPointer></faHandPointer>    
                        </a>    
                         
                    </li>    
                </ol>   
                <div>    
                    <input    
                        type="number"    
                        min="1"    
                        max={numPages}    
                        value={inputPageNumber}    
                        onChange={handleInputPageChange}    
                        onKeyPress={handleKeyPress}    
                        style={{ width: '50px', marginLeft: '0px', textAlign:'center', marginRight:'4px' }}    
                    />    
                    <span>Enter Page number</span>    
                </div>    
                <div ref={viewerRef} style={{ position: 'relative', border: '2px solid black', width: '100%', height: '100%', overflow: 'hidden', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>    
                     <div>    
                        [{sliderValue}]  
                    </div>     
                    <input    
                        type="range"    
                        min="1"    
                        max={numPages}    
                        value={sliderValue}    
                        onChange={handleSliderChange}    
                        onMouseUp={goToPage}    
                        onTouchEnd={goToPage}    
                        style={{ position: 'absolute', right: 0, top: 0, bottom: 0, writingMode: 'bt-lr', transform: 'rotate(90deg)', zIndex: 1 }}    
                    />    
                    <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '5px' }}>    
                        <button style={{ fontStyle: 'bold', width: '30px', height: '30px', margin: '2px', borderColor:'darkgray' }} onClick={zoomOut}>-</button>    
                        <button style={{ fontStyle: 'bold', width: '30px', height: '30px', margin: '2px' , borderColor:'darkgray'}} onClick={zoomIn}>+</button>    
                        <button style={{ fontStyle: 'bold', width: '30px', height: '30px', margin: '2px', borderColor:'darkgray' }} onClick={toggleFullScreen}>↔</button>    
                    </div>    
                    <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '5px' }}>    
                        <button style={{ fontStyle: 'bold', width: '30px', height: '30px', margin: '2px', borderColor:'darkgray' }} onClick={handlePrevPage}>←</button>    
                        <button style={{ fontStyle: 'bold', width: '30px', height: '30px', margin: '2px', borderColor:'darkgray' }} onClick={handleNextPage}>→</button>    
                    </div>    
                    <TransformWrapper    
                        defaultScale={1}    
                        wheel={{ step: 0.1 }}    
                        options={{ limitToBounds: false }}    
                        pan={{ disabled: false }}    
                    >    
                        <TransformComponent>    
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>    
                                <Document file={research} onLoadSuccess={onDocumentLoadSuccess} >    
                                    <Page    
                                        pageNumber={pageNumber}    
                                        scale={scale}    
                                        renderTextLayer={false}    
                                        renderAnnotationLayer={false}    
                                    />    
                                </Document>    
                            </div>    
                        </TransformComponent>    
                    </TransformWrapper>    
                </div>    
                <p>    
                    Page {pageNumber} of {numPages}    
                </p>    
            </div>  
            <a    
                href='https://drive.google.com/file/d/1irRITcH3wI__4JWs0zNpbuysPgCOZxjo/view?usp=drivesdk'    
            >    
                Click here to download and install raw application (Android 10+)  
                <FontAwesomeIcon icon={faAndroid} style={{ marginLeft: '5px' }} />  
            </a>      
        </div>    
    );    
};    
    
export default Research;  
