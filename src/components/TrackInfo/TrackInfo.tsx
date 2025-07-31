import Link from "next/link";
import cls from "./trackInfo.module.css";
import { TrackType } from "@/sharedtypes/sharedTypes";

interface TrackInfoProps {
  track?: TrackType;
}
const TrackInfo = ({ track }: TrackInfoProps) => {
  return (
    <div className={cls.trackPlay__contain}>
      <div className={cls.trackPlay__image}>
        <svg className={cls.trackPlay__svg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className={cls.trackPlay__author}>
        <Link className={cls.trackPlay__authorLink} href="">
          {track?.name}
        </Link>
      </div>
      <div className={cls.trackPlay__album}>
        <Link className={cls.trackPlay__albumLink} href="">
          {track?.author}
        </Link>
      </div>
    </div>
  );
};

export default TrackInfo;
