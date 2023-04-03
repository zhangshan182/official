import React from "react";
import styles from "./index.less";
import mainStyle from "../../../global.less";
import { DEFAULT_URL } from "@/constants";
import douyin from "../../../assets/page/live/douyin.png";
import weixin from "../../../assets/page/live/weixin.png";
import kuaishou from "../../../assets/page/live/kuaishou.png";
import taobao from "../../../assets/page/live/taobao.png";
import huya from "../../../assets/page/live/huya.png";
import mainStyles from "@/global.less";

interface IVManList {
  path: string,
  title: string
}

interface IConsumptionList {
  path: string,
  title: string,
  subTitle: string
}

// 不同类型的虚拟人列表
const vManList: IVManList[] = [
  {
    path: DEFAULT_URL,
    title: "超写实"
  },
  {
    path: DEFAULT_URL,
    title: "写实"
  },
  {
    path: DEFAULT_URL,
    title: "3D美型"
  },
  {
    path: DEFAULT_URL,
    title: "2.5D"
  },
  {
    path: DEFAULT_URL,
    title: "二次元"
  }
];
// 平台支持列表
const platformList: { path: string }[] = [
  { path: douyin },
  { path: weixin },
  { path: kuaishou },
  { path: taobao },
  { path: huya }
];
// 消费级别场景列表
const consumptionList: IConsumptionList[] = [
  {
    path: DEFAULT_URL,
    title: "超低门槛",
    subTitle: "仅通过一个普通RGB摄像头和一台电脑，就可实现写实级别虚拟人直播。操作简单，零学习成本。"
  },
  {
    path: DEFAULT_URL,
    title: "高质量",
    subTitle: "写实级别的高质量虚拟人，配合高精度的面部捕捉和动作捕捉，可达到准影视级的直播效果。"
  },
  {
    path: DEFAULT_URL,
    title: "炫酷的互动特效",
    subTitle: "支持多种3D互动特效，可在直播间实现酷炫的效果，提升成交转化。"
  }
];
//直播案例列表
const liveCaseList: { path: string }[] = [
  { path: DEFAULT_URL },
  { path: DEFAULT_URL },
  { path: DEFAULT_URL }
];

export default function Page() {
  return (
    <>
      <div className={styles.pc}>
        <div className={mainStyle.pageCon}>
          <div className={mainStyles.bigPic}>图片缺失</div>
          <div className={mainStyle.mainTitle}>虚拟人直播解决方案</div>
          <div className={mainStyle.mainConSubtitle}>
            我们针对不同的客户需求，以全自研的高质量虚拟人生成和高精度的动作表情捕捉驱动和AI驱动技术，提供专业级和消费级的虚拟直播解决方案。
          </div>
          <div className={styles.commonBg}>
            <div className={styles.picInRight}>
              <div className={styles.picInRightLeft}>
                <div className={styles.commonT}>专业级直播方案</div>
                <div className={styles.commonSubT}>通过对中之人进行高精度的面部捕捉和动作捕捉，我们可以实现专业影视级的直播，实时展现细微的表情和动作。</div>
              </div>
              <img src={DEFAULT_URL} alt="" />
            </div>
          </div>
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.picInLeft}>
              <img src={DEFAULT_URL} alt="" />
              <div className={styles.picInLeftRight}>
                <div className={styles.commonT}>高精度高质量实时捕捉</div>
                <div className={styles.commonSubT}>面部高精度的表情神态捕捉和光惯混合的动作捕捉，可以达到好莱坞影视级的质量和效果。</div>
              </div>
            </div>
          </div>
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.commonT}>支持不同类型的虚拟人</div>
            <div className={styles.commonSubT}>基于我们的表情迁移算法，可以实现不同风格的虚拟人的表情迁移，最大程度上降低由于中之人演员与虚拟人形象差异产生的表情违和与千篇一律。</div>
            <div className={styles.vManList}>
              {vManList.map((item, index) => {
                return (
                  <div className={styles.vManListItem} key={index}>
                    <img src={item.path} alt="" />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.picInRight}>
              <div className={styles.picInRightLeft}>
                <div className={styles.commonT}>支持多人同时互动直播</div>
                <div className={styles.commonSubT}>可以同时支持多个虚拟人或者虚拟人与真人同时高质量低延迟实时直播，并可在直播中实时互动。</div>
              </div>
              <img src={DEFAULT_URL} alt="" />
            </div>
          </div>
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.commonT}>多直播平台支持</div>
            <div className={styles.commonSubT}>可高质量支持各大主流直播平台，以及所有支持推流的直播平台。如抖音、视频号、快手、淘宝、虎牙等。</div>
            <div className={styles.platformList}>
              {platformList.map((item, index) => {
                return (
                  <img key={index} src={item.path} alt="" />
                );
              })}
            </div>
          </div>
          {/*  消费级直播方案*/}
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.commonT}>消费级直播方案</div>
            <div className={styles.commonSubT}>仅通过一个RGB摄像头，就可实现面部表情实时捕捉和动作手势实时跟踪，做到低延迟实时直播。</div>
            <div className={styles.consumptionList}>
              {consumptionList.map((item, index) => {
                return (
                  <div key={index} className={styles.consumptionListItem}>
                    <img src={item.path} alt="" />
                    <div className={styles.titleCon}>{item.title}</div>
                    <div className={styles.subTCon}>{item.subTitle}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {/*  直播案列*/}
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.commonT}>直播案例</div>
            <div className={styles.liveCaseList}>
              {liveCaseList.map((item, index) => {
                return (
                  <img key={index} src={item.path} alt="" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.title}>专业级直播方案</div>
        <div className={styles.subT}>我们针对不同的客户需求，以全自研的高质量虚拟人生成和高精度的动作表情捕捉驱动和AI驱动技术，提供专业级和消费级的虚拟直播解决方案。</div>
        <img className={styles.mainPic} src={DEFAULT_URL} alt="" />
        <div className={styles.itemBox}>
          <div className={styles.itemT}>全流程自动化</div>
          <div className={styles.itemSubT}>通过对中之人进行高精度的面部捕捉和动作捕捉，我们可以实现专业影视级的直播，实时展现细微的表情和动作。</div>
          <img className={styles.comPic} src={DEFAULT_URL} alt="" />
        </div>
        <div className={styles.itemBox} style={{marginTop:'0.8rem'}}>
          <div className={styles.itemT}>高精度高质量实时捕捉</div>
          <div className={styles.itemSubT}>面部高精度的表情神态捕捉和光惯混合的动作捕捉，可以达到好莱坞影视级的质量和效果。</div>
          <img className={styles.comPic} src={DEFAULT_URL} alt="" />
        </div>
        <div className={styles.itemBox} style={{marginTop:'0.8rem'}}>
          <div className={styles.itemT}>支持不同类型的虚拟人</div>
          <div className={styles.itemSubT}>基于我们的表情迁移算法，可以实现不同风格的虚拟人的表情迁移，最大程度上降低由于中之人演员与虚拟人形象差异产生的表情违和与千篇一律。</div>
          <div className={styles.typeList}>
            {vManList.map((item,index)=><div className={styles.item} key={index}>
              <img src={item.path} alt="" />
              <div className={styles.text}>{item.title}</div>
            </div>)}
          </div>
        </div>
        <div className={styles.itemBox} style={{marginTop:'0.8rem'}}>
          <div className={styles.itemT}>多直播平台支持</div>
          <div className={styles.itemSubT}>可高质量支持各大主流直播平台，以及所有支持推流的直播平台。如抖音、视频号、快手、淘宝、虎牙等。</div>
          <div className={styles.platformList}>
            {platformList.map((item,index)=><div className={styles.item} key={index}>
              <img src={item.path} alt="" />
            </div>)}
          </div>
        </div>
        <div className={styles.itemBox} style={{marginTop:'0.8rem'}}>
          <div className={styles.itemT}>消费级直播方案</div>
          <div className={styles.itemSubT}>仅通过一个RGB摄像头，就可实现面部表情实时捕捉和动作手势实时跟踪，做到低延迟实时直播。</div>
          <div className={styles.consumptionList}>
            {consumptionList.map((item,index)=><div className={styles.item} key={index}>
              <img src={item.path} alt="" />
              <div className={styles.title}>{item.title}</div>
              <div className={styles.sub}>{item.subTitle}</div>
            </div>)}
          </div>
        </div>
        <div className={styles.itemBox} style={{marginTop:'0.8rem'}}>
          <div className={styles.itemT}>直播案例</div>
          <div className={styles.caseList}>
            {liveCaseList.map((item,index)=><div className={styles.item} key={index}>
              <img src={item.path} alt="" />
            </div>)}
          </div>
        </div>
      </div>
    </>

  );
}
