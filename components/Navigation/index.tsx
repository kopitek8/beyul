import React from 'react';
import { IoIosMenu } from 'react-icons/io';

import styles from '../../styles/Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <div className={styles.container}>
      <IoIosMenu size={48} color={'white'} />
    </div>
  );
};

export default Navigation;
