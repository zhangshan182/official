import React, { FC } from "react";
import styles from './style.less'
import ViewMore from "@/components/Common/ViewMore";
interface IProps {
  url: string,
  title: string,
  subtitle: string,
  showMore: boolean,
  morePath?: string
}

const LeftPic: FC<IProps> = (props) => {
  const { url, title, subtitle, showMore, morePath } = props;
  return (
    <div className={styles.main}>
      <img src={url} alt="" />
      <div className={styles.leftItem}>
        <div className={styles.leftItemTitle}>{title}</div>
        <div className={styles.leftItemSubT}>{subtitle}</div>
        <div>   {showMore && morePath && <ViewMore path={morePath} />}</div>
      </div>
    </div>
  );
};
export default LeftPic;
