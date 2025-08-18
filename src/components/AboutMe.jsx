import React, { useState, useRef, useEffect } from 'react';

const AboutMe = () => {
  const [showDownloadSuccess, setShowDownloadSuccess] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const sectionRef = useRef(null);

  // Mock function to download CV
  const downloadCV = () => {
    // In a real implementation, you would fetch the PDF file
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf'; // Replace with actual path
    link.download = 'Bethel-Evuchukwu-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowDownloadSuccess(true);
    setTimeout(() => setShowDownloadSuccess(false), 3000);
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Add the animation styles directly */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0; }
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="min-h-full py-16 px-4 sm:px-6 lg:px-8 bg-white opacity-0"
      >
        {/* Rest of your component remains exactly the same */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image Circle */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-gray-200 overflow-hidden shadow-lg flex-shrink-0">
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Your Photo</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
              
              <p className="text-xl text-gray-700 mb-8">
                Stand out with a stunning website/app...<br />
                Let us craft a sleek, high-performing digital experience that keeps people coming back.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-600">Name:</p>
                  <p className="text-lg font-medium text-black">Bethel Evuchukwu</p>
                </div>
                <div>
                  <p className="text-gray-600">Phone:</p>
                  <p className="text-lg font-medium text-black">+234 8128 066749</p>
                </div>
                <div>
                  <p className="text-gray-600">Email:</p>
                  <p className="text-sm font-medium text-black">bethelobbethelokafors4562@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-600">LinkedIn:</p>
                  <p className="text-lg font-medium text-black">Bethel Evuchukwu</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowMeetingModal(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Schedule a meeting with me
                </button>
                <button
                  onClick={downloadCV}
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md"
                >
                  Download my resume
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Download Success Popup */}
        {showDownloadSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fadeIn">
            Successfully downloaded!
          </div>
        )}

        {/* Meeting Modal */}
        {showMeetingModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Schedule a Meeting</h2>
                <button 
                  onClick={() => setShowMeetingModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="py-8 text-center">
                <p className="text-xl">Hello</p>
                {/* You can add your meeting scheduling form here later */}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowMeetingModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutMe;