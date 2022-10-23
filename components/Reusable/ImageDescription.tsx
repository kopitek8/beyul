import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/ImageDescription.module.css';

const renderItem = (key: number, src: StaticImageData, alt: string) => {
  return (
    <div className={styles.item} key={key}>
      <div className={styles.imageItemContainer}>
        <Image
          key={key}
          src={src}
          alt={alt}
          layout={'fill'}
          className={styles.imageItem}
        />
      </div>
      <p>{alt}</p>
    </div>
  );
};

export default renderItem;
