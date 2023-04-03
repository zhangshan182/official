import React from "react";
import styles from "./index.less";
import mainStyle from "../../../global.less";
import { ArrowRightOutlined } from "@ant-design/icons";
import yinqing from "../../../assets/page/metaverse/yinqing.png";
import xuniren from "../../../assets/page/metaverse/xuniren.png";
import ugcIcon from "../../../assets/page/metaverse/ugcIcon.svg";
import pgcIcon from "../../../assets/page/metaverse/pgcIcon.svg";
import saomiao from "../../../assets/page/metaverse/saomiao.svg";
import tupian from "../../../assets/page/metaverse/tupian.svg";
import shipin from "../../../assets/page/metaverse/shipin.svg";
import aigc from "../../../assets/page/metaverse/aigc.svg";
import pgc from "../../../assets/page/metaverse/pgc.svg";
import ugc from "../../../assets/page/metaverse/ugc.svg";
import changjing from "../../../assets/page/metaverse/changjing.svg";

import { DEFAULT_URL } from "@/constants";
import mainStyles from "@/global.less";

interface IPersonList {
  path: string,
  title: string
}

// 人模块的图片列表
const personList: IPersonList[] = [
  {
    path: yinqing,
    title: "虚拟人生成引擎"
  },
  {
    path: DEFAULT_URL,
    title: "AIGC"
  },
  {
    path: DEFAULT_URL,
    title: "身份证ID绑定"
  },
  {
    path: xuniren,
    title: "虚拟人"
  }
];
export default function Page() {
  return (
    <>
      <div className={styles.pc}>
        <div className={mainStyle.pageCon}>
          <div className={mainStyles.bigPic}>图片缺失</div>
          <div className={mainStyle.mainTitle}>元宇宙基建UGC平台</div>
          <div className={mainStyle.mainConSubtitle} style={{ paddingBottom: "3.854vw" }}>
            通过AIGC+PGC+UGC的模式，分层次的打造元宇宙基建的基础设施，构建海量的人、物、场的3D数字资产库，从而为元宇宙基建提供完整的解决方案。
          </div>
          <div className={styles.tryButton}>
            <span style={{ marginRight: "5px" }}>了解更多</span>
            <ArrowRightOutlined style={{ fontSize: 12 }} />
          </div>
          {/*  人*/}
          <div className={styles.commonBg}>
            <div className={styles.commonT}>人</div>
            <div className={styles.commonSubT}>通过我们的虚拟人生成技术，可生成海量的高质量虚拟人数字资产。</div>
            <div className={styles.personList}>
              {personList.map((item, index) => {
                return (
                  <div key={index} className={styles.item}>
                    <div className={styles.imgCon}>
                      <img src={item.path} alt="" />
                    </div>
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/*  物品*/}
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.commonT}>人</div>
            <div className={styles.commonSubT}>通过我们的虚拟人生成技术，可生成海量的高质量虚拟人数字资产。</div>
            <div className={styles.goodsCon}>
              <div className={styles.topCon}>
                <div className={styles.goodsConPicText}>
                  <img src={DEFAULT_URL} alt="" />
                  <div className={styles.textCon}>3D实物扫描</div>
                </div>
              </div>
              <div className={styles.midCon}>
                <img src={DEFAULT_URL} alt="" />
                <div className={styles.midConText}>3D物品</div>
                <div className={styles.midConTop} />
                <div className={styles.midConTopText}>AIGC+PGC+UGC</div>
                <div className={styles.botLeftCon} />
                <div className={styles.botLeftText}>AIGC+PGC+UGC</div>
                <div className={styles.botRightCon} />
                <div className={styles.botRightText}>AIGC+PGC+UGC</div>
              </div>
              <div className={styles.botCon}>
                <div className={styles.goodsConPicText}>
                  <img src={DEFAULT_URL} alt="" />
                  <div className={styles.textCon}>物品照片</div>
                </div>
                <div className={styles.goodsConPicText}>
                  <img src={DEFAULT_URL} alt="" />
                  <div className={styles.textCon}>物品视频</div>
                </div>
              </div>
            </div>
          </div>
          {/*  场*/}
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.commonT}>场</div>
            <div className={styles.commonSubT}>通过3D扫描重建和照片生成等AIGC技术，结合PGC+UGC的模式，以搭积木的方式，构建海量的数字孪生和虚构场景。</div>
            <div className={styles.siteCon}>
              <div className={styles.siteConLeft}>
                <div className={styles.siteConImg}>
                  <img src={saomiao} alt="" />
                  <div className={styles.siteConText}>3D扫描</div>
                </div>
                <div className={styles.siteConImg}>
                  <img src={tupian} alt="" />
                  <div className={styles.siteConText}>图 片</div>
                </div>
                <div className={styles.siteConImg}>
                  <img src={shipin} alt="" />
                  <div className={styles.siteConText}>视 频</div>
                </div>
              </div>
              <div className={styles.siteConMidLeft}>
                <div className={styles.siteConImg}>
                  <img src={aigc} alt="" />
                  <div className={styles.siteConText}>AIGC</div>
                </div>
                <div className={styles.leftTop} />
                <div className={styles.leftMid} />
                <div className={styles.leftBot} />
              </div>
              <div className={styles.siteConMidRight}>
                <div className={styles.siteConImg}>
                  <img src={pgc} alt="" />
                  <div className={styles.siteConText}>PGC</div>
                </div>
                <div className={styles.siteConImg}>
                  <img src={ugc} alt="" />
                  <div className={styles.siteConText}>UGC</div>
                </div>
                <div className={styles.leftTop} />
                <div className={styles.leftBot} />
                <div className={styles.rightTop} />
                <div className={styles.rightBot} />
              </div>
              <div className={styles.siteConRight}>
                <div className={styles.siteConImg}>
                  <img src={changjing} alt="" />
                  <div className={styles.siteConText}>3D场景</div>
                </div>
              </div>
            </div>
          </div>
          {/*  创作者分润*/}
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.commonT}>创作者分润</div>
            <div className={styles.commonSubT}>我们根据创作者的作品难度和复杂度，对创作者进行两个层级的定位，分别可参与UGC（用户生产内容）分润和PGC（专家生产内容）分润。</div>
            <div className={styles.creatorCon}>
              <div className={styles.leftItem}>
                <img src={ugcIcon} alt="" />
                <span>UGC</span>
              </div>
              <div className={styles.rightItem}>
                <img src={pgcIcon} alt="" />
                <span>PGC</span>
              </div>
            </div>
          </div>
          {/*  元宇宙基建平台*/}
          <div className={styles.commonBg} style={{ marginTop: "2.083vw" }}>
            <div className={styles.commonT}>元宇宙基建平台</div>
            <div className={styles.commonSubT}>通过构建数字资产库和创作者生态，我们最终将打造一个强大的元宇宙基建平台，为企业提供多样的元宇宙创建方式。</div>
            <div className={styles.infrastructure}>
              <img src={DEFAULT_URL} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.title}>元宇宙基建UGC平台</div>
        <div className={styles.subT}>通过AIGC+PGC+UGC的模式，分层次的打造元宇宙基建的基础设施，构建海量的人、物、场的3D数字资产库，从而为元宇宙基建提供完整的解决方案。</div>
        <img className={styles.mainPic} src={DEFAULT_URL} alt="" />
        <div className={styles.itemBox}>
          <div className={styles.itemT}>人</div>
          <div className={styles.itemSubT}>通过我们的虚拟人生成技术，可生成海量的高质量虚拟人数字资产。</div>
          <div className={styles.manList}>
            {personList.map((item, index) =>
              <div key={index} className={styles.item}>
                <img src={item.path} alt="" />
                <div className={styles.text}>{item.title}</div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.itemBox} style={{ marginTop: "0.8rem" }}>
          <div className={styles.itemT}>物</div>
          <div className={styles.itemSubT}>结合3D扫描、AI和图形学技术，我们可通过高精度扫描、照片生成和视频生成等多种方式创建3D物品。</div>
          <div className={styles.thing}>
            <div className={styles.top}>
              <div className={styles.small}>
                <img src={DEFAULT_URL} alt="" />
                <div className={styles.text}>3D实物扫描</div>
              </div>
            </div>
            <div className={styles.mid}>
              <div className={styles.big}>
                <img className={styles.bigImg} src={DEFAULT_URL} alt="" />
                <div className={styles.text}>3D物品</div>
                <div className={styles.topArrow} />
                <div className={styles.botLeft} />
                <div className={styles.botRight} />
                <div className={styles.topText}>AIGC+PGC+UGC</div>
                <div className={styles.leftText}>AIGC+PGC+UGC</div>
                <div className={styles.rightText}>AIGC+PGC+UGC</div>
              </div>
            </div>
            <div className={styles.bot}>
              <div className={styles.small}>
                <img src={DEFAULT_URL} alt="" />
                <div className={styles.text}>物品照片</div>
              </div>
              <div className={styles.small}>
                <img src={DEFAULT_URL} alt="" />
                <div className={styles.text}>物品视频</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemBox} style={{ marginTop: "0.8rem" }}>
          <div className={styles.itemT}>场</div>
          <div className={styles.itemSubT}>通过3D扫描重建和照片生成等AIGC技术，结合PGC+UGC的模式，以搭积木的方式，构建海量的数字孪生和虚构场景。</div>
          <div className={styles.site}>
            <div className={styles.top}>
              <div className={styles.small}>
                <img src={saomiao} alt="" />
                <div className={styles.text}>3D扫描</div>
              </div>
            </div>
            <div className={styles.midTop}>
              <div className={styles.small}>
                <img src={pgc} alt="" />
                <div className={styles.text}>PGC</div>
              </div>
            </div>
            <div className={styles.mid}>
              <div className={styles.midLeft}>
                <div className={styles.small}>
                  <img src={tupian} alt="" />
                  <div className={styles.text}>图片</div>
                </div>
              </div>
              <div className={styles.midMid}>
                <div className={styles.small}>
                  <img src={aigc} alt="" />
                  <div className={styles.text}>AIGC</div>
                </div>
                <div className={styles.midLeftTop}/>
                <div className={styles.midLeftLine}/>
                <div className={styles.midBotLeft}/>
                <div className={styles.midRightTop}/>
                <div className={styles.midRightBot}/>
              </div>
              <div className={styles.midR}>
                <div className={styles.small}>
                  <img src={changjing} alt="" />
                  <div className={styles.text}>3D场景</div>
                </div>
                <div className={styles.midRTop}/>
                <div className={styles.midRBot}/>
              </div>
            </div>
            <div className={styles.midBot}>
              <div className={styles.small}>
                <img src={aigc} alt="" />
                <div className={styles.text}>AIGC</div>
              </div>
            </div>
            <div className={styles.bot}>
              <div className={styles.small}>
                <img src={shipin} alt="" />
                <div className={styles.text}>视 频</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemBox} style={{ marginTop: "0.8rem" }}>
          <div className={styles.itemT}>创作者分润</div>
          <div className={styles.itemSubT}>我们根据创作者的作品难度和复杂度，对创作者进行两个层级的定位，分别可参与UGC（用户生产内容）分润和PGC（专家生产内容）分润。</div>
          <div className={styles.creatorCon}>
            <div className={styles.leftItem}>
              <img src={ugcIcon} alt="" />
              <span>UGC</span>
            </div>
            <div className={styles.rightItem}>
              <img src={pgcIcon} alt="" />
              <span>PGC</span>
            </div>
          </div>
          <div className={styles.creatorConText}>元宇宙基建平台</div>
        </div>
        <div className={styles.itemBox} style={{ marginTop: "0.8rem" }}>
          <div className={styles.itemT}>元宇宙基建平台</div>
          <div className={styles.itemSubT}>通过构建数字资产库和创作者生态，我们最终将打造一个强大的元宇宙基建平台，为企业提供多样的元宇宙创建方式。</div>
          <img src={DEFAULT_URL} className={styles.baseImg} alt="" />
        </div>
      </div>
    </>
  );
}

