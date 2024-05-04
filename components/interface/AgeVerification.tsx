// AgeVerification.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/styles/ageVerification.module.css';

const AgeVerification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("AgeVerification component mounted");
    const ageVerified = document.cookie.split(';').some((item) => item.trim().startsWith('ageVerified=true'));
    if (!ageVerified) {
      setIsVisible(true);
    }
  }, []);

  const handleYes = () => {
    document.cookie = "ageVerified=true; max-age=86400; path=/";
    setIsVisible(false);
  };

  const handleNo = () => {
    window.location.href = "https://google.com";
  };

  // Instead of returning null, return hidden divs
  if (!isVisible) {
    return <div style={{ display: 'none' }}></div>;
  }

  return (
    <div className={styles.is_18}>
        <div className={styles.is_18_msg}>
        <div className={styles.title}>Age Restricted Content Warning</div>
        <div className={styles.msg}>This website contains age-restricted materials including nudity and explicit depictions of sexual activity. By entering, you affirm that you are at least 18 years of age or the age of majority in the jurisdiction you are accessing the website from and you consent to viewing sexually explicit content.</div>
        <div className={styles.confirm_btns}>
            <button className={styles.is_18_enter} onClick={handleYes}>Enter (I am 18 or older)</button>
            <button className={styles.is_18_leave} onClick={handleNo}>leave</button>
        </div>
        </div>
    </div>
  );
};

export default AgeVerification;
/**
<div class="is-18-msg">
    <div class="title">Age Restricted Content Warning</div>
    <div class="msg">
    </div>
    <div class="confirm-btns">
        <button class="is-18-enter" onclick="setTimeout(()=>document.querySelector(&quot;.is-18&quot;).remove(),100),document.cookie=&quot;is_18=true;expires=&quot;+new Date(Date.now()+2592e6).toUTCString()+&quot;;path=/&quot;,setTimeout(()=>localStorage.setItem(&quot;is_18&quot;,&quot;true&quot;),800)">Enter (I am 18 or older)</button>
        <button class="is-18-leave" onclick="history.back()">Leave</button>
    </div>
</div>
 */