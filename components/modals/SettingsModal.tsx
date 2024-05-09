// @/components/modals/SettingsModal.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import styles from '@styles/settingsModal.module.css';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation('common');
    const [blurNSFW, setBlurNSFW] = useState<boolean>(false);
  
    // Retrieve setting from localStorage if it exists
    useEffect(() => {
      const savedSetting = localStorage.getItem('blurNSFW');
      if (savedSetting !== null) {
        setBlurNSFW(JSON.parse(savedSetting));
      }
    }, []);
  
    const handleBlurNSFWChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      setBlurNSFW(isChecked);
      localStorage.setItem('blurNSFW', JSON.stringify(isChecked));
    };

    if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>{t('Settings')}</h2>
        <div>
            <label className={styles.Lable_title}>{t('Image Settings')}</label>
            <div>
                <input type="checkbox" checked={blurNSFW} onChange={handleBlurNSFWChange}/>
                <label className={styles.blurnsfwtext}>{t('Blur NSFW images')}</label>
            </div>
        </div>
        <div>
          <label className={styles.Lable_title} >{t('Language')}</label>
          <select className={styles.select}>
            <option value="en-US">{t('English')}</option>
            <option value="nl-NL">{t('Dutch')}</option>
            <option value="tr-TR">{t('Turkish')}</option>
          </select>
        </div>
        {/* Add more settings fields as required */}
      </div>
    </div>
  );
};

export default SettingsModal;
