import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import styles from './Home.css';
import { version } from '../package.json';

export default function Home(): JSX.Element {
  const [message, setMessage] = useState<any>('');
  useEffect(() => {
    (window as any).ipcRenderer.on('auto-update-status', (_event, message) => {
      setMessage(message);
    });
  }, []);

  return (
    <div className={styles.container} data-tid="container">
      <h2>
        Version:
        {` ${version}`}
      </h2>
      <h4>
        Message:
        {message}
      </h4>
      {/* <Link to={routes.COUNTER}>to Counter</Link> */}
    </div>
  );
}
