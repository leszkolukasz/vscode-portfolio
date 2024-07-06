import Modal from 'react-modal';
import ImageGallery from "react-image-gallery";
import styles from '../styles/GalleryModal.module.css'
import { useMemo } from 'react';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '75%',
      height: '75%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'var(--main-bg)'
    },
  };

const GalleryModal = ({ gallery, onClose }) => {
  const items = useMemo(() => {
    return gallery.map((image) => ({
      original: image,
      thumbnail: image,
    }));
  }
  , [gallery]);

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <div className={styles.container}>
        <ImageGallery items={items} showFullscreenButton={false} showPlayButton={false}/>
      </div>
    </Modal>
    );
};

export default GalleryModal;
