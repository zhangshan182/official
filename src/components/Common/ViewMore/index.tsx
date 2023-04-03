import React, { FC } from "react";
import style from "./style.less";
import { ArrowRightOutlined } from "@ant-design/icons";
import { history } from "@umijs/max";

interface IProps {
  path: string;
}

const ViewMore: FC<IProps> = (props) => {
  const { path } = props;
  // console.log(path);
  return (
    <div className={style.main} onClick={()=>{
      history.push(path)
      window.location.reload();
    }}>
      <span>了解更多</span>
      <ArrowRightOutlined style={{ fontSize: 12 }} />
    </div>
  );
};
export default ViewMore;
