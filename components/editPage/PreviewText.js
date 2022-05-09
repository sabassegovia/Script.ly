import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../../styles/PreviewText.module.css';
// import { BsArrowLeft } from 'react-icons/bs';

export default function PreviewText({ script, setScript }) {
  const textarea_ref = useRef();

  useEffect(() => {
    textarea_ref.current.focus();
  }, []);

  const handleTextChange = (event) => {
    setScript(event.target.value);
  }

  return (
    <>
      <div className={styles.container}>
        {/* <BsArrowLeft className={styles.back}/> */}
        <textarea
          ref={textarea_ref}
          className={styles.text}
          onChange={handleTextChange}
          value={script}>
        </textarea>
      </div>
    </>
  );

};
