import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import LoginModal from './LoginModal';


const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Automatically show the modal if the route is /login
    setModalVisible(location.pathname === '/login');
  }, [location]);

 

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
     
      {modalVisible && (
        <div
          id="popup-modal"
          className="flex justify-center mt-30 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                {/* Beginning of closing tag */}
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              {/* End of closing tag */}
              
              <div className="p-6 text-center">
               <LoginModal/>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
