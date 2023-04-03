import React from "react";
import styles from "./index.less";
import mainStyle from "../../../global.less";
import liucheng from "../../../assets/page/customized/liucheng.png";
import ai from "../../../assets/page/customized/ai.png";
import jiedian from "../../../assets/page/customized/jiedian.png";
import zhiliang from "../../../assets/page/customized/zhiliang.png";
import { DEFAULT_URL } from "@/constants";
import mainStyles from "@/global.less";
import cls from "classnames";

interface IautoList {
  path: string,
  title: string,
  subtitle: string
}

interface MakeList {
  path: string;
  title: string;
}

interface ICaseList {
  path: string;
}

const autoList: IautoList[] = [
  {
    path: DEFAULT_URL,
    title: "原画设计",
    subtitle: "支持多种风格的AI设计生成"
  },
  {
    path: DEFAULT_URL,
    title: "3D重建",
    subtitle: "AI超写实级的3D重建"
  },
  {
    path: DEFAULT_URL,
    title: "骨骼绑定",
    subtitle: "智能自动化绑骨"
  },
  {
    path: DEFAULT_URL,
    title: "动作表情驱动备份",
    subtitle: "光学、惯性捕捉驱动和AI驱动"
  },
  {
    path: DEFAULT_URL,
    title: "灯光渲染备份",
    subtitle: "AI实时渲染"
  }
];
const typeList:MakeList[]=[
  {
    path:DEFAULT_URL,
    title:'超写实'
  },
  {
    path:DEFAULT_URL,
    title:'超写实'
  },
  {
    path:DEFAULT_URL,
    title:'写实'
  },
  {
    path:DEFAULT_URL,
    title:'3D美型'
  },
  {
    path:DEFAULT_URL,
    title:'2.5D'
  },
  {
    path:DEFAULT_URL,
    title:'二次元'
  },
]
const makeList: MakeList[] = [
  {
    path: liucheng,
    title: "全流程自动化"
  },
  {
    path: ai,
    title: "高度AI化"
  },
  {
    path: jiedian,
    title: "节点周期大幅缩短"
  },
  {
    path: zhiliang,
    title: "高质量交付"
  }
];
const sceneConList: MakeList[] = [
  {
    path: DEFAULT_URL,
    title: "全流程自动化"
  },
  {
    path: DEFAULT_URL,
    title: "高度AI化"
  },
  {
    path: DEFAULT_URL,
    title: "节点周期大幅缩短"
  },
  {
    path: DEFAULT_URL,
    title: "高质量交付"
  }
];
const caseList: ICaseList[] = [
  { path: DEFAULT_URL },
  { path: DEFAULT_URL },
  { path: DEFAULT_URL }
];
export default function Page() {
  return (
    <>
      <div className={cls(mainStyles.pageCon, styles.pc)}>
        <div className={mainStyles.bigPic}>图片缺失</div>
        <div className={mainStyle.mainTitle}>虚拟人定制</div>
        <div className={mainStyle.mainConSubtitle}>
          我们将AI与图形图像技术融合到虚拟人制作和落地的每一个环节，提供各种类型的虚拟人定制，并将虚拟人制作的周期缩短至一周以内，极大程度上实现了降本增效。
        </div>
        <div className={styles.commonCon}>
          <div className={styles.commonConT}>全流程自动化</div>
          <div className={styles.commonConSubT}>我们将AI结合图形学，并应用到极致，将虚拟人生成过程中AI化程度提升到90%，自动化程度提高到99%，最大程度上为客户实现了降本增效。</div>
          <div className={styles.commonConTopList}>
            <div className={styles.commonConTopListLeft}>
              <div className={styles.imgT}>原画设计</div>
              <div className={styles.imgSubT}>支持多种风格的AI设计生成</div>
            </div>
            <div className={styles.rightItem}>
              <div className={styles.imgT}>3D重建</div>
              <div className={styles.imgSubT}>AI超写实级的3D重建</div>
            </div>
          </div>
          <div className={styles.commonConBotList}>
            <div className={styles.botListLeft}>
              <div className={styles.rightItem}>
                <div className={styles.imgT}>骨骼绑定</div>
                <div className={styles.imgSubT}>智能自动化绑骨</div>
              </div>
              <div className={styles.rightItem}>
                <div className={styles.imgT}>动作表情驱动</div>
                <div className={styles.imgSubT}>光学、惯性捕捉驱动和AI驱动</div>
              </div>
            </div>
            <div className={styles.rightItem}>
              <div className={styles.imgT}>灯光渲染</div>
              <div className={styles.imgSubT}>AI实时渲染</div>
            </div>
          </div>
        </div>
        <div className={styles.commonCon} style={{ marginTop: "2.083vw" }}>
          <div className={styles.commonConT}>支持多种类型虚拟人</div>
          <div className={styles.commonConSubT}>提供多种类型支持，可满足不同客户、不同场景、不同预算、不同目标客群的虚拟人定制需求。</div>
          <div className={styles.commonConTopList}>
            <div className={styles.commonConTopListLeft}>
              <div className={styles.manImgT}>超写实</div>
            </div>
            <div className={styles.rightItem}>
              <div className={styles.manImgT}>写实</div>
            </div>
          </div>
          <div className={styles.commonConBotList}>
            <div className={styles.botListLeft}>
              <div className={styles.rightItem}>
                <div className={styles.manImgT}>3D美型</div>
              </div>
              <div className={styles.rightItem}>
                <div className={styles.manImgT}>2.5D</div>
              </div>
            </div>
            <div className={styles.rightItem}>
              <div className={styles.manImgT}>二次元</div>
            </div>
          </div>
        </div>
        <div className={styles.makeCon}>
          <div className={styles.commonConT}>制作周期短</div>
          <div className={styles.commonConSubT}>相比行业内超写实虚拟人2-4个月的制作周期，我们利用自研AI和自研的RPA将整个超写实虚拟人的制作周期缩短到一周以内，其他类型虚拟人制作周期缩短到5分钟以内，解决了虚拟数字人制作周期长的痛点。</div>
          <div className={styles.makeConList}>
            {makeList.map((item, index) => {
              return (
                <div className={styles.makeConListItem} key={index}>
                  <img src={item.path} alt="" />
                  <div className={styles.makeConListItemText}>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.sceneCon}>
          <div className={styles.commonConT}>落地场景全链路支持</div>
          <div className={styles.commonConSubT}>基于我们全自研的动作捕捉和表情捕捉驱动，以及AI动作表情声音驱动的核心技术，可为客户提供完整的全链路落地解决方案。</div>
          <div className={styles.sceneConList}>
            {sceneConList.map((item, index) => {
              return (
                <div className={styles.sceneConListItem} key={index}>
                  <img src={item.path} alt="" />
                  <div className={styles.sceneConListItemText}>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.caseCon}>
          <div className={styles.commonConT}>定制案例</div>
          <div className={styles.caseConList}>
            {caseList.map((item, index) => {
              return (
                <img src={item.path} alt="" key={index}></img>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.title}>虚拟人定制</div>
        <div className={styles.subT}>我们将AI与图形图像技术融合到虚拟人制作和落地的每一个环节，提供各种类型的虚拟人定制，并将虚拟人制作的周期缩短至一周以内，极大程度上实现了降本增效。</div>
        <img className={styles.mainPic} src={DEFAULT_URL} alt="" />
        <div className={styles.itemBox}>
          <div className={styles.itemT}>全流程自动化</div>
          <div className={styles.itemSubT}>我们将AI结合图形学，并应用到极致，将虚拟人生成过程中AI化程度提升到90%，自动化程度提高到99%，最大程度上为客户实现了降本增效。</div>
          <div className={styles.autoList}>
            {autoList.map((item, index) =>
              <div className={styles.item} key={index}>
                <img src={item.path} alt="" />
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemSubtitle}>{item.subtitle}</div>
              </div>)
            }
          </div>
        </div>
        <div className={styles.itemBox} style={{marginTop:"0.8rem"}}>
          <div className={styles.itemT}>支持多种类型虚拟人</div>
          <div className={styles.itemSubT}>提供多种类型支持，可满足不同客户、不同场景、不同预算、不同目标客群的虚拟人定制需求。</div>
          <div className={styles.autoList}>
            {typeList.map((item, index) =>
              <div className={styles.item} key={index}>
                <img src={item.path} alt="" />
                <div className={styles.typeTitle}>{item.title}</div>
              </div>)
            }
          </div>
        </div>
        <div className={styles.itemBox} style={{marginTop:"0.8rem"}}>
          <div className={styles.itemT}>制作周期短</div>
          <div className={styles.itemSubT}>相比行业内超写实虚拟人2-4个月的制作周期，我们利用自研AI和自研的RPA将整个超写实虚拟人的制作周期缩短到一周以内，其他类型虚拟人制作周期缩短到5分钟以内，解决了虚拟数字人制作周期长的痛点。</div>
          <div className={styles.makeList}>
            {makeList.map((item,index)=><div className={styles.item} key={index}>
              <img src={item.path} alt="" />
              <div className={styles.text}>{item.title}</div>
            </div>)}
          </div>
        </div>
        <div className={styles.itemBox} style={{marginTop:"0.8rem"}}>
          <div className={styles.itemT}>落地场景全链路支持</div>
          <div className={styles.itemSubT}>基于我们全自研的动作捕捉和表情捕捉驱动，以及AI动作表情声音驱动的核心技术，可为客户提供完整的全链路落地解决方案。</div>
          <div className={styles.supportList}>
            {sceneConList.map((item,index)=><div key={index}>
              <img src={item.path} alt="" />
              <div className={styles.text}>{item.title}</div>
            </div>)}
          </div>
        </div>
        <div className={styles.itemBox} style={{marginTop:"0.8rem"}}>
          <div className={styles.itemT}>定制案例</div>
          <div className={styles.caseList}>
            {caseList.map((item,index)=><div key={index}>
              <img src={item.path} alt="" />
            </div>)}
          </div>
        </div>
      </div>
    </>
  );
}
