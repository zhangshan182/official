import ViewMore from "@/components/Common/ViewMore";
import { DEFAULT_URL } from "@/constants";
import { Carousel } from "antd";
import biaoqingxuexi from "../../assets/page/home/biaoqingxuexi.svg";
import dongzuoxuexi from "../../assets/page/home/dongzuoxuexi.svg";
import guangxuedongbu from "../../assets/page/home/guangxuedongbu.svg";
import imgIcon from "../../assets/page/home/imgIcon.svg";
import qudongbiaoqing from "../../assets/page/home/qudongbiaoqing.svg";
import rightArrow from "../../assets/page/home/rightArrow.svg";
import sanweijianmo from "../../assets/page/home/sanweijianmo.svg";
import xuanranyinqing from "../../assets/page/home/xuanranyinqing.svg";
import yinsexuexi from "../../assets/page/home/yinsexuexi.svg";
import yuanhuashengcheng from "../../assets/page/home/yuanhuashengcheng.svg";
import zhinengbanggu from "../../assets/page/home/zhinengbanggu.svg";
// 这下面是测试
import chaoxieshi from '../../assets/page/home/超写实.png'
import meixing from '../../assets/page/home/美型.png'
import katong from '../../assets/page/home/卡通.png'
import twoD from '../../assets/page/home/2.5D.png'
import twoC from '../../assets/page/home/二次元.jpg'

import styles from "./index.less";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { history } from "@@/core/history";

interface IVManList {
  path: string;
  title: string;
}

interface IProductList {
  path: string;
  title: string;
  subT: string;
}

interface ICoreList {
  title: string;
  iconList: { path: string; title: string }[];
}

// 虚拟人图片列表
const vManList: IVManList[] = [
  {
    path: chaoxieshi,
    title: "超写实"
  },
  {
    path: meixing,
    title: "美型"
  },
  {
    path: katong,
    title: "3D卡通"
  },
  {
    path: twoD,
    title: "2.5D"
  },
  {
    path: twoC,
    title: "二次元"
  }
];
// 应用场景图片列表
const applicationList: IVManList[] = [
  {
    path: DEFAULT_URL,
    title: "虚拟偶像"
  },
  {
    path: DEFAULT_URL,
    title: "企业代言"
  },
  {
    path: DEFAULT_URL,
    title: "直播带货"
  },
  {
    path: DEFAULT_URL,
    title: "主播主持"
  },
  {
    path: DEFAULT_URL,
    title: "导购解说"
  },
  {
    path: DEFAULT_URL,
    title: "影视制作"
  }
];
// 产品中心列表
const productList: IProductList[] = [
  {
    path: 'customized',
    title: "虚拟人定制平台",
    subT: "虚拟人定制平台"
  },
  {
    path: 'live',
    title: "虚拟人直播解决方案",
    subT: "虚拟人直播解决方案"
  },
  {
    path: 'saas',
    title: "虚拟人及内容生成SAAS平台",
    subT: "虚拟人及内容生成SAAS平台"
  },
  {
    path: 'metaverse',
    title: "元宇宙基建UGC平台",
    subT: "元宇宙基建UGC平台"
  }
];
// 核心技术图片列表
const coreTList: ICoreList[] = [
  {
    title: "虚拟人生成引擎",
    iconList: [
      {
        path: zhinengbanggu,
        title: "AI智能绑骨"
      },
      {
        path: yuanhuashengcheng,
        title: "AI多风格原画生成"
      },
      {
        path: sanweijianmo,
        title: "AI三维建模"
      }
    ]
  },
  {
    title: "虚拟人能力进化引擎",
    iconList: [
      {
        path: yinsexuexi,
        title: "音色学习与迁移引擎"
      },
      {
        path: biaoqingxuexi,
        title: "表情学习引擎"
      },
      {
        path: dongzuoxuexi,
        title: "动作学习引擎"
      }
    ]
  },
  {
    title: "虚拟人驱动引擎",
    iconList: [
      {
        path: xuanranyinqing,
        title: "AI云端渲染引擎"
      },
      {
        path: qudongbiaoqing,
        title: "AI语音驱动表情"
      },
      {
        path: guangxuedongbu,
        title: "AI光学动捕面捕算法"
      }
    ]
  }
];
// 处理产品中心的跳转功能
const linkToPath = (path:string)=>{
  history.push(path)
  window.location.reload();
}
export default function Page() {
  return (
    <>
      <div id={"homeCon"} className={styles.homeCon}>
        <Carousel dotPosition={"right"}>
          <div className={styles.videoCon}>
            <video
              crossOrigin="anonymous"
              title="video"
              controls={true}
              autoPlay={false}
              controlsList={"nodownload noplaybackrate"}
              disablePictureInPicture={true}
              src="https://gw.alipayobjects.com/v/rms/afts/video/A*1bayRJ4p9BoAAAAAAAAAAAAAARQnAQ/1080P"
            />
            <div className={styles.videoConText}>打造虚拟世界基建平台</div>
          </div>
          <div className={styles.vManCon}>
            <div className={styles.vManConBOx}>
              <div className={styles.vManConLeft}>
                <div className={styles.vManConLeftT}>虚拟人</div>
                <div className={styles.vManConLeftSubT}>
                  <p>
                    虚拟人是虚拟世界中最核心的要素，也是最具价值的数字资产。
                  </p>
                  <p>我们拥有两大类型的数字人：身份型数字人、服务型数字人。</p>
                  <p>
                    支持多种风格的数字人：超写实、写实、3D卡通、2.5D、二次元。
                  </p>
                  <p>
                    我们将超写实虚拟人定制周期颠覆性的缩短到一周以内，其他风格制作可以做到5分钟之内。
                  </p>
                </div>
                <ViewMore path={"/virtualHuman"} />
              </div>
              <div className={styles.vManConRight}>
                <div className={styles.vManConRightT}>
                  <img src={imgIcon} alt="" />
                  仅需一张照片，就可生成超写实级别的虚拟数
                </div>
                <div className={styles.vManConRightList}>
                  {vManList.map((item, index) => {
                    return (
                      <div className={styles.itemCon} key={index}>
                        <img src={item.path} alt="" />
                        <span>{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.applicationCon}>
            <div className={styles.commonBgBoxNoFlex}>
              <div className={styles.commonTitle}>应用场景</div>
              <div className={styles.applicationConSubT}>
                <p>
                  通过我们全链路的虚拟人和虚拟内容的制作能力，可实现多个场景的全流程支持。
                </p>
                <p>
                  如虚拟偶像、企业代言、直播带货、主播主持、导购解说、影视制作等。
                </p>
              </div>
              <div className={styles.applicationListCon}>
                {applicationList.map((item, index) => {
                  return (
                    <div className={styles.applicationItem} key={index}>
                      <img src={item.path} alt="" />
                      <span>{item.title}</span>
                    </div>
                  );
                })}
              </div>
              <ViewMore path={"/applicationScenario"} />
            </div>
          </div>
          <div className={styles.productCon}>
            <div className={styles.commonBgBoxWithFlex}>
              <div className={styles.productConLeft}>
                <div className={styles.commonTitle}>产品中心</div>
                <div className={styles.productConLeftSubT}>
                  通过高度AI化、智能化和自动化的方式，提供高效、高质量的虚拟人、虚拟物和虚拟场景的生成和全流程、
                  全链路的多场景落地解决方案和产品；包括虚拟人定制服务、虚拟人及内容生成SAAS平台、虚拟人直播解决方案和元宇宙基建UGC平台。
                </div>
                {/*<ViewMore path={"/customized"} />*/}
              </div>
              <div className={styles.productConRight}>
                {productList.map((item, index) => {
                  return (
                    <div className={styles.productConRightItem} key={index}>
                      <div className={styles.productConRightItemImgCon}>
                        <img src={item.path} alt="" />
                        <div className={styles.viewMoreBtn} onClick={()=>linkToPath(item.path)}>了解更多 <ArrowRightOutlined style={{ fontSize: 12 }} /></div>
                        {/*<div className={styles.imgConSubTCon}>{item.subT}</div>*/}
                      </div>
                      <div className={styles.productConRightItemTextCon}>
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.coreCon}>
            <div className={styles.commonBgBoxNoFlex}>
              <div className={styles.commonTitle}>核心技术</div>
              <div className={styles.coreConSubT}>
                我们拥有虚拟数字人全栈自研核心技术，从虚拟人的生成、驱动和进化三个维度打造了全链路、全流程的技术栈，为客户创造更多的核心价值。
              </div>
              <div className={styles.coreConList}>
                {coreTList.map((item, index) => {
                  return (
                    <div className={styles.coreConListItem} key={index}>
                      <p className={styles.itemTitle}>{item.title}</p>
                      <div className={styles.itemIconList}>
                        {item.iconList.map((iconItem, iconIndex) => {
                          return (
                            <div className={styles.imgCon} key={iconIndex}>
                              <img src={iconItem.path} alt="" />
                              <div className={styles.textCon}>
                                {iconItem.title}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <ViewMore path={"/coreTechnology"} />
            </div>
          </div>
        </Carousel>
      </div>
      <div className={styles.homeConM}>
        <div className={styles.videoConM}>
          <div className={styles.text}>打造虚拟世界基建平台</div>
          <video
            crossOrigin="anonymous"
            title="video"
            controls={true}
            autoPlay={false}
            src="https://gw.alipayobjects.com/v/rms/afts/video/A*1bayRJ4p9BoAAAAAAAAAAAAAARQnAQ/1080P"
          ></video>
        </div>
        <div className={styles.vManM}>
          <div className={styles.commonBoxM}>
            <div className={styles.commonTM}>虚拟人</div>
            <p className={styles.commonSubTM}>虚拟人是虚拟世界中最核心的要素，也是最具价值的数字资产。</p>
            <p className={styles.commonSubTM}>我们拥有两大类型的数字人：身份型数字人、服务型数字人。</p>
            <p className={styles.commonSubTM}>支持多种风格的数字人：超写实、写实、3D卡通、2.5D、二次元。</p>
            <p className={styles.commonSubTM}>我们将超写实虚拟人定制周期颠覆性的缩短到一周以内，其他风格制作可以做到5分钟之内。</p>
            <div className={styles.iconAndPM}>
              <img src={imgIcon} alt="" />
              仅需一张照片，就可生成超写实级别的虚拟数字人。
            </div>
            <div className={styles.vManListConM}>
              {vManList.map((item, index) => {
                return (
                  <div key={index} className={styles.item}>
                    <img src={item.path} alt="" />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
            <ViewMore path={"/coreTechnology"} />
          </div>
        </div>
        <div className={styles.applicationConM}>
          <div className={styles.commonBoxM}>
            <div className={styles.commonTM}>应用场景</div>
            <p className={styles.commonSubTM}>通过我们全链路的虚拟人和虚拟内容的制作能力，可实现多个场景的全流程支持。</p>
            <p className={styles.commonSubTM}>如虚拟偶像、企业代言、直播带货、主播主持、导购解说、影视制作等。</p>
            <div className={styles.applicationList}>
              {applicationList.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.path} alt="" />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
            <ViewMore path={"/coreTechnology"} />
          </div>
        </div>
        <div className={styles.productConM}>
          <div className={styles.commonBoxM}>
            <div className={styles.commonTM}>产品中心</div>
            <p className={styles.commonSubTM}>
              通过高度AI化、智能化和自动化的方式，提供高效、高质量的虚拟人、虚拟物和虚拟场景的生成和全流程、
              全链路的多场景落地解决方案和产品；包括虚拟人定制服务、虚拟人及内容生成SAAS平台、虚拟人直播解决方案和元宇宙基建UGC平台。
            </p>
            <div className={styles.proListCon}>
              {productList.map((item, index) => {
                return (
                  <div className={styles.item} key={index}>
                    <div className={styles.imgCon}>
                      <img src={item.path} alt="" />
                      <div className={styles.abCOn}>{item.title}</div>
                    </div>
                    <div className={styles.moreCon}>
                      了解更多
                      <img src={rightArrow} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.coreConM}>
          <div className={styles.commonBoxM}>
            <div className={styles.commonTM}>核心技术</div>
            <div className={styles.commonSubTM}>
              我们拥有虚拟数字人全栈自研核心技术，从虚拟人的生成、驱动和进化三个维度打造了全链路、全流程的技术栈，为客户创造更多的核心价值。
            </div>
            <div className={styles.coreList}>
              {coreTList.map((item, index) => {
                return (
                  <div key={index} className={styles.item}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.listCon}>
                      {item.iconList.map((iconItem, iconIndex) => {
                        return (
                          <div className={styles.listItem} key={iconIndex}>
                            <img src={iconItem.path} alt="" />
                            <span>{iconItem.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <ViewMore path={"/coreTechnology"} />
          </div>
        </div>

      </div>
    </>
  );
}
