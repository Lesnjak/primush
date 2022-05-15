// ! Delete this comment or delete component if its doesn't use
import { FC, useEffect, useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { GiPauseButton } from 'react-icons/gi';

import styles from './styles.module.scss';

type Props = {
  src: string;
  preview: string;
};

export const VideoBlock: FC<Props> = ({ preview, src }) => {
  const ref = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = () => {
    const { current }: any = ref;
    current.play();
  };
  const handlePause = () => {
    const { current }: any = ref;
    current.pause();
  };
  useEffect(() => {
    if (ref) {
      const { current }: any = ref;
      current.onended = function () {
        setIsPlay(false);
      };
      current.onplay = function () {
        setIsPlay(true);
      };
      current.onpause = function () {
        setIsPlay(false);
      };
    }
  }, [ref]);
  return (
    <div className={styles.video}>
      {!isPlay && (
        <div onClick={handlePlay} className={styles.video__play}>
          <FaPlay />
        </div>
      )}
      {isPlay && (
        <div onClick={handlePause} className={styles.video__play}>
          <GiPauseButton />
        </div>
      )}

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video ref={ref} controls={isPlay} preload="auto" poster={preview} loop>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
