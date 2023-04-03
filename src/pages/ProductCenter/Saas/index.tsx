import React from "react";
import styles from "./index.less";
import mainStyle from "../../../global.less";
import { DEFAULT_URL } from "@/constants";
import aigc from '../../../assets/page/sass/aigc.svg'
import d3 from '../../../assets/page/sass/3d.svg'
import content from '../../../assets/page/sass/content.svg'
import ugc from '../../../assets/page/sass/ugc.svg'
import mainStyles from "@/global.less";

interface IPicList {
  path: string;
}
interface IRealisticList{
  path:string,
  title:string
}
// 一张照片即可生成list
const onePicList: IPicList[] = [
  { path: DEFAULT_URL },
  { path: DEFAULT_URL }
];
// 写实级别精度list
const realisticList: IRealisticList[] = [
  { path: DEFAULT_URL ,title:'细节一'},
  { path: DEFAULT_URL ,title:'细节二'},
  { path: DEFAULT_URL ,title:'细节三'},
];
// 自定义捏脸塑形list
const faceList: IPicList[] = [
  { path: DEFAULT_URL },
  { path: DEFAULT_URL }
];
export default function Page() {
  return (
    <>
    <div className={styles.pc}>
      <div className={mainStyle.pageCon}>
        <div className={mainStyles.bigPic}>图片缺失</div>
        <div className={mainStyle.mainTitle}>虚拟人及内容生成SaaS平台</div>
        <div className={mainStyle.mainConSubtitle}>
          仅需一张照片就可生成写实级别数字人，并通过我们的平台获得一站式的内容生成制作服务。
        </div>
        {/*  一张照片即可生成*/}
        <div className={styles.commonBg}>
          <div className={styles.commonT}>一张照片即可生成</div>
          <div className={styles.commonSubT}>不同于繁琐的虚拟人手动建模方式，我们仅需一张照片就可以生成写实级别的数字人。</div>
          <div className={styles.commonPicList}>
            {onePicList.map((item, index) => {
              return (
                <img key={index} src={item.path} alt="" />
              );
            })}
          </div>
        </div>
        {/*  写实级别精度*/}
        <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
          <div className={styles.commonT}>写实级别精度</div>
          <div className={styles.commonSubT}>借助我们自研的算法，可一键生成栩栩如生的写实级别的虚拟人。</div>
          <div className={styles.realisticList}>
            {realisticList.map((item, index) => {
              return (
                <div className={styles.realisticListItem} key={index}>
                  <img src={item.path} alt="" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/*  自定义捏脸塑形*/}
        <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
          <div className={styles.commonT}>自定义捏脸塑形</div>
          <div className={styles.commonSubT}>我们提供极具用户体验的在线捏脸塑形，用户可根据自己的喜好进行调整。  </div>
          <div className={styles.commonPicList}>
            {faceList.map((item, index) => {
              return (
                <img key={index} src={item.path} alt="" />
              );
            })}
          </div>
        </div>
        {/*  内容一键生成*/}
        <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
          <div className={styles.commonT}>内容一键生成</div>
          <div className={styles.commonSubT}>可通过图片视频模板，一键生成图片或视频内容，简单高效。 </div>
          <div className={styles.oneKeyCon}>
            <div className={styles.oneKeyConLeft}>
              <img src={DEFAULT_URL} alt="" />
              <img src={DEFAULT_URL} alt="" />
              <div className={styles.downArrowCon}/>
              <div className={styles.topArrowCon}/>
            </div>
            <div className={styles.oneKeyConMid}>
              <img src={DEFAULT_URL} alt="" />
              <div className={styles.lineArrowCon}/>
            </div>
            <img src={DEFAULT_URL} alt="" />
          </div>
        </div>
        {/*  UGC生态*/}
        <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
          <div className={styles.commonT}>UGC生态</div>
          <div className={styles.commonSubT}>我们采用UGC模式，用户可提交图片和视频模板，通过平台售卖，并可独享收益。</div>
          <div className={styles.ugcCon}>
            <div className={styles.ugcConLeft}>
              <div className={styles.leftTopCon}>
                <div className={styles.ugcConImg}>
                  <img src={aigc} alt="" />
                  <div className={styles.ugcConText}>AIGC</div>
                </div>
                <div className={styles.topConLine}/>
              </div>
              <div className={styles.leftMidCon}></div>
              <div className={styles.leftBotCon}>
                <div className={styles.ugcConImg}>
                  <img src={d3} alt="" />
                  <div className={styles.ugcConText}>3D数字资产库</div>
                </div>
                <div className={styles.botConLine}/>
              </div>
            </div>
            <div className={styles.ugcConMid}>
              <div className={styles.ugcConImg}>
                <img src={content} alt="" />
                <div className={styles.ugcConText}>内容生态</div>
              </div>
              <div className={styles.leftTopLine}/>
              <div className={styles.leftBotLine}/>
              <div className={styles.rightLine}/>
            </div>
            <div className={styles.ugcConImg}>
              <img src={ugc} alt="" />
              <div className={styles.ugcConText}>UGC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.mobile}>
      <div className={styles.title}>虚拟人及内容生成SaaS平台</div>
      <div className={styles.subT}>仅需一张照片就可生成写实级别数字人，并通过我们的平台获得一站式的内容生成制作服务。</div>
      <img className={styles.mainPic} src={DEFAULT_URL} alt="" />
      <div className={styles.itemBox}>
        <div className={styles.itemT}>一张照片即可生成</div>
        <div className={styles.itemSubT}>不同于繁琐的虚拟人手动建模方式，我们仅需一张照片就可以生成写实级别的数字人。</div>
        <img className={styles.comPic} style={{marginBottom:'0.3rem'}} src={DEFAULT_URL} alt="" />
        <img className={styles.comPic} src={DEFAULT_URL} alt="" />
      </div>
      <div className={styles.itemBox} style={{marginTop:'0.8rem'}}>
        <div className={styles.itemT}>写实级别精度</div>
        <div className={styles.itemSubT}>借助我们自研的算法，可一键生成栩栩如生的写实级别的虚拟人。</div>
        <div className={styles.realList}>
          {realisticList.map((item,index)=><div key={index}>
            <img src={item.path} alt="" />
           <div className={styles.text}>{item.title}</div>
          </div>)}
        </div>
      </div>
      <div className={styles.itemBox} style={{marginTop:'0.8rem'}}>
        <div className={styles.itemT}>自定义捏脸塑形</div>
        <div className={styles.itemSubT}>可通过图片视频模板，一键生成图片或视频内容，简单高效。</div>
        <div className={styles.faceList}>
          {faceList.map((item,index)=><div key={index}>
            <img src={item.path} alt="" />
          </div>)}
        </div>
      </div>
      <div className={styles.itemBox} style={{marginTop:'0.8rem'}}>
        <div className={styles.itemT}>内容一键生成</div>
        <div className={styles.itemSubT}>可通过图片视频模板，一键生成图片或视频内容，简单高效。</div>
        <div className={styles.oneKeyCon}>
          <div className={styles.oneKeyConLeft}>
            <img src={DEFAULT_URL} alt="" />
            <img src={DEFAULT_URL} alt="" />
            <div className={styles.downArrowCon}/>
            <div className={styles.topArrowCon}/>
          </div>
          <div className={styles.oneKeyConMid}>
            <img src={DEFAULT_URL} alt="" />
            <div className={styles.lineArrowCon}/>
          </div>
          <img src={DEFAULT_URL} alt="" />
        </div>
      </div>
      <div className={styles.itemBox} style={{marginTop:'0.8rem'}}>
        <div className={styles.itemT}>UGC生态</div>
        <div className={styles.itemSubT}>我们采用UGC模式，用户可提交图片和视频模板，通过平台售卖，并可独享收益。</div>
        <div className={styles.ugcCon}>
          <div className={styles.ugcConLeft}>
            <div className={styles.leftTopCon}>
              <div className={styles.ugcConImg}>
                <img src={aigc} alt="" />
                <div className={styles.ugcConText}>AIGC</div>
              </div>
              <div className={styles.topConLine}/>
            </div>
            <div className={styles.leftMidCon}></div>
            <div className={styles.leftBotCon}>
              <div className={styles.ugcConImg}>
                <img src={d3} alt="" />
                <div className={styles.ugcConText}>3D数字资产库</div>
              </div>
              <div className={styles.botConLine}/>
            </div>
          </div>
          <div className={styles.ugcConMid}>
            <div className={styles.ugcConImg}>
              <img src={content} alt="" />
              <div className={styles.ugcConText}>内容生态</div>
            </div>
            <div className={styles.leftTopLine}/>
            <div className={styles.leftBotLine}/>
            <div className={styles.rightLine}/>
          </div>
          <div className={styles.ugcConImg}>
            <img src={ugc} alt="" />
            <div className={styles.ugcConText}>UGC</div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
