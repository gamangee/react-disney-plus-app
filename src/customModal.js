import { useState } from 'react';
import Modal from './Modal';

const modalWrapperStyle = {
  position: 'relative',
  zIndex: 1,
};

const higherIndexWrapperStyle = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'blue',
  padding: '10px',
};

const customModal = () => {
  //   const [isModalOpen, setIsModalOpen] = useState(second);
  return (
    <>
      {/* <div style={modalWrapperStyle}>
        <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
        <Modal open={isModalOpen} onClose={setIsModalOpen} />
      </div> */}
      <div style={higherIndexWrapperStyle}>Z-Index 2</div>
    </>
  );
};

export default customModal;
