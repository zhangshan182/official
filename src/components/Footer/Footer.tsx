import React from "react";
import styles from "./style.less";
import logo from "../../assets/components/header/logo.png";
import { history } from "@umijs/max";

interface IList {
  img?: string;
  title: string;
  link?: string;
}

const footerItemList: { title: string, img?: string, itemList: IList[] }[] = [
  {
    img: logo,
    title: "深励科技", itemList: [
      { title: "联系电话：400-808-5286" },
      { title: "商务合作：business@deepincite.com" },
      { title: "支持与服务：service@deepincite.com" },
      { title: "简历投递：hr@deepincite.com" },
      { title: "公司地址：上海市园文路28号金源中心1816室" }
    ]
  },
  {
    title: "产品", itemList: [
      { title: "虚拟人全链路定制", link: "/customized" },
      { title: "虚拟人直播解决方案", link: "/live" },
      { title: "虚拟人内容SaaS平台", link: "/saas" },
      { title: "元宇宙基建平台", link: "/metaverse" }
    ]
  },
  {
    title: "社交媒体", itemList: [
      { title: "链接缺失", link: "www.baidu.com" },
      { title: "链接缺失", link: "www.baidu.com" }
    ]
  }
];
export default function Footer() {

  return (<div className={styles.footerCon}>
    {footerItemList.map(item => {
      return (<div className={styles.itemCon} key={item.title}>
        <div className={styles.itemConTitle}>
          {item.img && <img src={item.img} alt="" />} {item.title}
        </div>
        <div className={styles.itemConList}>
          {item.itemList.map(subItem => {
            return (<div key={subItem.title}>
              {subItem.link ? <a onClick={() => {
                if (subItem.link) history.push(subItem.link);
                window.location.reload();
              }}><span>{subItem.title}</span></a> : subItem.title}
            </div>);
          })}
        </div>
      </div>);
    })}

    <div className={styles.itemCon}>
      <div className={styles.code}>
        二维码缺失
      </div>
    </div>
  </div>);
}
