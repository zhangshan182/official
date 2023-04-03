import React from "react";
import mainStyles from "../../global.less";
import styles from "./index.less";
import aiFace from "../../assets/page/coreT/aiFace.svg";
import aiCa from "../../assets/page/coreT/aiCa.svg";
import aiMesh from "../../assets/page/coreT/aiMesh.svg";
import aiGuGe from "../../assets/page/coreT/aiGuGe.svg";
import aiThreeD from "../../assets/page/coreT/aiThreeD.svg";
import caizhijiexi from "../../assets/page/coreT/caizhijiexi.svg";
import guangxue from "../../assets/page/coreT/guangxue.svg";
import biaoqingsuanfa from "../../assets/page/coreT/biaoqingsuanfa.svg";
import xuanranyinqing from "../../assets/page/coreT/xuanranyinqing.svg";
import wenbenqinggan from "../../assets/page/coreT/wenbenqinggan.svg";
import guagnxueyandong from "../../assets/page/coreT/guagnxueyandong.svg";
import duihuayinqing from "../../assets/page/coreT/duihuayinqing.svg";
import aixuanran from "../../assets/page/coreT/aixuanran.svg";
import xuniren from "../../assets/page/coreT/xuniren.svg";
import yuyan from "../../assets/page/coreT/yuyan.svg";
import dongzuo from "../../assets/page/coreT/dongzuo.svg";
import biaoqing from "../../assets/page/coreT/biaoqing.svg";
import yinsexuexi from "../../assets/page/coreT/yinsexuexi.svg";
import duihuanengli from "../../assets/page/coreT/duihuanengli.svg";
import dongzuoxuexi from "../../assets/page/coreT/dongzuoxuexi.svg";
import yuyindongzuo from "../../assets/page/coreT/yuyindongzuo.svg";
import biaoqingxuexi from "../../assets/page/coreT/biaoqingxuexi.svg";
import yuyinbiaoqing from "../../assets/page/coreT/yuyinbiaoqing.svg";
import { DEFAULT_URL } from "@/constants";
import cls from "classnames";

export default function Page() {
  return (
    <>
      <div className={styles.pcCon}>
        <div className={mainStyles.pageCon}>
          <div className={mainStyles.bigPic}>图片缺失</div>
          <div className={mainStyles.mainTitle}>核心技术</div>
          <div className={mainStyles.mainConSubtitle}>
            我们将AI和图像图形学完美结合并融入到虚拟人制作的每一个细节，将AI化程度提高到90%以上，自动化程度提高到99%，
            极大的缩短了虚拟人的制作周期；为了赋予虚拟人以灵魂和智慧，我们自研了多项AI驱动算法和能力进化算法，让虚拟人能听会说，有声有色，富有情感。
          </div>
          {/*  虚拟人引擎模块*/}
          <div className={styles.commonBox}>
            <div className={styles.commonBoxT}>虚拟人生成引擎</div>
            <div className={styles.commonBoxSubT}>全流程高度AI化，高效全自动生成虚拟人。</div>
            <div className={styles.growCon}>
              <div className={cls(styles.itemCon, styles.topCon)}>
                <img src={aiFace} alt="" />
                <div>AI高精度人脸3D重建算法</div>
              </div>
              <div className={styles.midCon}>
                <div className={cls(styles.itemCon, styles.leftImg)}>
                  <img src={aiCa} alt="" />
                  <div className={styles.titleCon}>AI原画生成算法</div>
                  <div className={styles.rightTopCon} />
                  <div className={styles.rightBotCon} />
                </div>
                <div className={cls(styles.itemCon, styles.midImg)}>
                  <img src={aiMesh} alt="" />
                  <div className={styles.titleCon}>多模态AI Mesh优化算法</div>
                  <div className={styles.leftTopCon} />
                  <div className={styles.leftBotCon} />
                </div>
                <div className={styles.midConArrow}></div>
                <div className={cls(styles.itemCon, styles.rightImg)}>
                  <img src={aiGuGe} alt="" />
                  <div className={styles.titleCon}>智能骨骼绑定算法</div>
                </div>
              </div>
              <div className={cls(styles.itemCon, styles.botCon)}>
                <img src={aiThreeD} alt="" />
                <div className={styles.titleCon}>AI人体3D建模算法</div>
              </div>
            </div>
          </div>
          {/*  虚拟人驱动和渲染引擎模块*/}
          <div className={styles.commonBox}>
            <div className={styles.commonBoxT}>虚拟人驱动和渲染引擎</div>
            <div className={styles.commonBoxSubT}>全自研AI算法栈，可支持真人驱动和AI驱动两种模式，满足专业级和消费级的虚拟人驱动需求。自研AI渲染引擎，可同时满足低延时实时渲染和影视级高质量渲染的需求。</div>
            <div className={styles.driveCon}>
              <div className={styles.outCircle} />
              <div className={styles.insideCircle} />
              <div className={styles.imgCon} style={{ left: "50%", top: "-1%", marginLeft: "-2.7343vw" }}>
                <img src={caizhijiexi} alt="" />
                <div className={styles.textCon}>材质解算算法</div>
              </div>
              <div className={styles.imgCon} style={{ left: "10%", top: "13%" }}>
                <img src={guangxue} alt="" />
                <div className={styles.textCon}>AI光学动捕算法</div>
              </div>
              <div className={styles.imgCon} style={{ right: "10%", top: "13%" }}>
                <img src={biaoqingsuanfa} alt="" />
                <div className={styles.textCon}>AI文本转表情算法</div>
              </div>
              <div className={styles.imgCon} style={{ left: "-1%", top: "50%", marginTop: "-2.7343vw" }}>
                <img src={aiFace} alt="" />
                <div className={styles.textCon}>AI光学面捕算法</div>
              </div>
              <div className={styles.midConImg}>
                <img src={xuanranyinqing} alt="" />
                <div className={styles.textCon}>虚拟人驱动和渲染引擎</div>
              </div>
              <div className={styles.imgCon} style={{ right: "-1%", top: "50%", marginTop: "-2.7343vw" }}>
                <img src={wenbenqinggan} alt="" />
                <div className={styles.textCon}>AI文本转情感语音算法</div>
              </div>

              <div className={styles.imgCon} style={{ left: "10%", bottom: "13%" }}>
                <img src={guagnxueyandong} alt="" />
                <div className={styles.textCon}>AI光学眼动捕捉算法</div>
              </div>
              <div className={styles.imgCon} style={{ right: "10%", bottom: "13%" }}>
                <img src={duihuayinqing} alt="" />
                <div className={styles.textCon}>AI对话引擎</div>
              </div>

              <div className={styles.imgCon} style={{ left: "50%", bottom: "-1%", marginLeft: "-2.7343vw" }}>
                <img src={aixuanran} alt="" />
                <div className={styles.textCon}>AI渲染算法</div>
              </div>

            </div>
          </div>
          {/*  虚拟人能力进化引擎模块*/}
          <div className={styles.commonBox} style={{ marginBottom: 0 }}>
            <div className={styles.commonBoxT}>虚拟人能力进化引擎</div>
            <div className={styles.commonBoxSubT}>我们为虚拟人打造了能力进化系统，让虚拟人有声有色，并不断向高级智能进化。</div>
            <div className={styles.evolutionCon}>
              <div className={styles.topCon}>
                <div className={styles.icon160}>
                  <img src={xuniren} alt="" />
                  <div className={styles.textCon}>虚拟人</div>
                </div>
              </div>
              <div className={styles.topArrow} />
              <div className={styles.midCon}>
                <div className={styles.icon180}>
                  <img src={yuyan} alt="" />
                  <div className={styles.textCon}>语言</div>
                </div>
                <div className={styles.icon180}>
                  <img src={dongzuo} alt="" />
                  <div className={styles.textCon}>动作</div>
                </div>
                <div className={styles.icon180}>
                  <img src={biaoqing} alt="" />
                  <div className={styles.textCon}>表情</div>
                </div>
              </div>
              <div className={styles.botArrow}>
                <div className={styles.botArrowItem} />
                <div className={styles.botArrowItem} />
                <div className={styles.botArrowItem} />
              </div>
              <div className={styles.botCon}>
                <div className={styles.icon160}>
                  <img src={yinsexuexi} alt="" />
                  <div className={styles.textCon}>音色学习与迁移</div>
                </div>
                <div className={styles.icon160}>
                  <img src={duihuanengli} alt="" />
                  <div className={styles.textCon}>对话能力进化引擎</div>
                </div>
                <div className={styles.icon160}>
                  <img src={dongzuoxuexi} alt="" />
                  <div className={styles.textCon}>动作学习与迁移</div>
                </div>
                <div className={styles.icon160}>
                  <img src={yuyindongzuo} alt="" />
                  <div className={styles.textCon}>语音动作多模态进化</div>
                </div>
                <div className={styles.icon160}>
                  <img src={biaoqingxuexi} alt="" />
                  <div className={styles.textCon}>表情学习与迁移</div>
                </div>
                <div className={styles.icon160}>
                  <img src={yuyinbiaoqing} alt="" />
                  <div className={styles.textCon}>语音表情多模态进化</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileCon}>
        <div className={styles.comT}>核心技术</div>
        <div className={styles.comSubT}>我们将AI和图像图形学完美结合并融入到虚拟人制作的每一个细节，将AI化程度提高到90%以上，自动化程度提高到99%，极大的缩短了虚拟人的制作周期；为了赋予虚拟人以灵魂和智慧，我们自研了多项AI驱动算法和能力进化算法，让虚拟人能听会说，有声有色，富有情感。</div>
        <img src={DEFAULT_URL} alt="" className={styles.bigPic} />
        <div className={styles.commonBox}>
          <div className={styles.comT}>虚拟人生成引擎</div>
          <div className={styles.comSubT}>全流程高度AI化，高效全自动生成虚拟人。</div>
          <div className={styles.growCon}>
            <div className={styles.topLine}>
              <div className={styles.item}>
                <img src={aiFace} alt="" />
                <div className={styles.text}>AI高精度人脸3D重建算法</div>
              </div>
              <div className={styles.topLeft} />
              <div className={styles.topRight} />
            </div>
            <div className={styles.midLine}>
              <div className={styles.item} style={{ marginRight: "36vw" }}>
                <img src={aiCa} alt="" />
                <div className={styles.text}>AI原画生成算法</div>
              </div>
              <div className={styles.item} style={{ marginRight: "2vw" }}>
                <img src={aiMesh} alt="" />
                <div className={styles.text}>多模态AI Mesh优化算法</div>
              </div>
              <div className={styles.arrow} style={{ marginRight: "2vw" }} />
              <div className={styles.item}>
                <img src={aiGuGe} alt="" />
                <div className={styles.text}>智能骨骼 绑定算法</div>
              </div>
            </div>
            <div className={styles.botLine}>
              <div className={styles.item}>
                <img src={aiThreeD} alt="" />
                <div className={styles.text}>AI人体3D 建模算法</div>
              </div>
              <div className={styles.botLeft} />
              <div className={styles.botRight} />
            </div>
          </div>
        </div>
        <div className={styles.commonBox}>
          <div className={styles.comT}>虚拟人驱动和渲染引擎</div>
          <div className={styles.comSubT}>全自研AI算法栈，可支持真人驱动和AI驱动两种模式，满足专业级和消费级的虚拟人驱动需求。自研AI渲染引擎，可同时满足低延时实时渲染和影视级高质量渲染的需求。</div>
          <div className={styles.driveCon}>
            <div className={styles.outCircle} />
            <div className={styles.insideCircle} />
            <div className={styles.imgCon} style={{ left: "50%", top: "-4%", marginLeft: "-5.335vw" }}>
              <img src={caizhijiexi} alt="" />
              <div className={styles.textCon}>材质解算算法</div>
            </div>
            <div className={styles.imgCon} style={{ left: "10%", top: "13%" }}>
              <img src={guangxue} alt="" />
              <div className={styles.textCon}>AI光学动捕算法</div>
            </div>
            <div className={styles.imgCon} style={{ right: "9%", top: "13%" }}>
              <img src={biaoqingsuanfa} alt="" />
              <div className={styles.textCon}>AI文本转表情算法</div>
            </div>
            <div className={styles.imgCon} style={{ left: "-5%", top: "50%", marginTop: "-5.335vw" }}>
              <img src={aiFace} alt="" />
              <div className={styles.textCon}>AI光学面捕算法</div>
            </div>
            <div className={styles.midConImg}>
              <img src={xuanranyinqing} alt="" />
              <div className={styles.textCon}>虚拟人驱动和渲染引擎</div>
            </div>
            <div className={styles.imgCon} style={{ right: "-5%", top: "50%", marginTop: "-5.335vw" }}>
              <img src={wenbenqinggan} alt="" />
              <div className={styles.textCon}>AI文本转情感语音算法</div>
            </div>

            <div className={styles.imgCon} style={{ left: "13%", bottom: "8%" }}>
              <img src={guagnxueyandong} alt="" />
              <div className={styles.textCon}>AI光学眼动捕捉算法</div>
            </div>
            <div className={styles.imgCon} style={{ right: "10%", bottom: "9%" }}>
              <img src={duihuayinqing} alt="" />
              <div className={styles.textCon}>AI对话引擎</div>
            </div>

            <div className={styles.imgCon} style={{ left: "50%", bottom: "-4%", marginLeft: "-5.335vw" }}>
              <img src={aixuanran} alt="" />
              <div className={styles.textCon}>AI渲染算法</div>
            </div>

          </div>
        </div>
        <div className={styles.commonBox} style={{ paddingBottom: "9vw" }}>
          <div className={styles.comT}>虚拟人能力进化引擎</div>
          <div className={styles.comSubT}>我们为虚拟人打造了能力进化系统，让虚拟人有声有色，并不断向高级智能进化。</div>
          <div className={styles.evolutionCon}>
            <div className={styles.topCon}>
              <div className={styles.icon160}>
                <img src={xuniren} alt="" />
                <div className={styles.textCon}>虚拟人</div>
              </div>
            </div>
            <div className={styles.topArrow} />
            <div className={styles.midCon}>
              <div className={styles.icon180}>
                <img src={yuyan} alt="" />
                <div className={styles.textCon}>语言</div>
              </div>
              <div className={styles.icon180}>
                <img src={dongzuo} alt="" />
                <div className={styles.textCon}>动作</div>
              </div>
              <div className={styles.icon180}>
                <img src={biaoqing} alt="" />
                <div className={styles.textCon}>表情</div>
              </div>
            </div>
            <div className={styles.botArrow}>
              <div className={styles.botArrowItem} />
              <div className={styles.botArrowItem} />
              <div className={styles.botArrowItem} />
            </div>
            <div className={styles.botCon}>
              <div className={styles.icon}>
                <img src={yinsexuexi} alt="" />
                <div className={styles.textCon}>音色学习与迁移</div>
              </div>
              <div className={styles.icon}>
                <img src={duihuanengli} alt="" />
                <div className={styles.textCon}>对话能力进化引擎</div>
              </div>
              <div className={styles.icon}>
                <img src={dongzuoxuexi} alt="" />
                <div className={styles.textCon}>动作学习与迁移</div>
              </div>
              <div className={styles.icon}>
                <img src={yuyindongzuo} alt="" />
                <div className={styles.textCon}>语音动作多模态进化</div>
              </div>
              <div className={styles.icon}>
                <img src={biaoqingxuexi} alt="" />
                <div className={styles.textCon}>表情学习与迁移</div>
              </div>
              <div className={styles.icon}>
                <img src={yuyinbiaoqing} alt="" />
                <div className={styles.textCon}>语音表情多模态进化</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
