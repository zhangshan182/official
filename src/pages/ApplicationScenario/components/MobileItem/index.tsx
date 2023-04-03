import React, { FC } from "react";
import styles from "./style.less";
import ViewMore from "@/components/Common/ViewMore";

interface IProps {
  url: string,
  title: string,
  subtitle: string,
  showMore: boolean,
  morePath?: string
}

const MobileIndex: FC<IProps> = (props) => {
  const { url, title, subtitle, showMore, morePath } = props;
  return (
    <div className={styles.item}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <img style={showMore ? {} : { marginBottom: 0 }} src={url} alt="" />
      {showMore && morePath && <ViewMore path={morePath} />}
    </div>
  );
};
export default MobileIndex;
