import React, { useEffect, useState } from 'react';

const TypewriterText = ({ texts, speed = 80, delay = 1000 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= texts.length) return;

    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(texts[index].substring(0, subIndex));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, delay]);

  return (
    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffffff' }}>
      {text}
      <span style={{ color: '#61dafb' }}>|</span>
    </h1>
  );
};

export default TypewriterText;
