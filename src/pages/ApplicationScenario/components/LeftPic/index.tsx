import React, { FC } from "react";
import styles from './style.less'
import ViewMore from "@/pages/ApplicationScenario/components/ViewMore";
interface IProps {
  url: string,
  title: string,
  subtitle: string,
  showMore: boolean,
  morePath?: string
}

const RightPic: FC<IProps> = (props) => {
  const { url, title, subtitle, showMore, morePath } = props;
  return (
    <div className={styles.main}>
      <div className={styles.leftItem}>
        <div className={styles.leftItemTitle}>{title}</div>
        <div className={styles.leftItemSubT}>{subtitle}</div>
        {showMore && morePath && <ViewMore path={morePath} />}
      </div>
      <img src={url} alt="" />
      {/*<h1>*/}
      {/*  {url}*/}
      {/*  {title}*/}
      {/*  {subtitle}*/}
      {/*  {showMore ? "more" : "noMore"}*/}
      {/*  {morePath}*/}
      {/*</h1>*/}
    </div>
  );
};
export default RightPic;
