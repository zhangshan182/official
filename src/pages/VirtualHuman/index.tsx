import React from "react";
import styles from "./index.less";
import mainStyles from "../../global.less";
import cls from "classnames";
import { DEFAULT_URL } from "@/constants";
import icon1 from "../../assets/page/virtualHuman/01.svg";
import icon2 from "../../assets/page/virtualHuman/02.svg";
import icon3 from "../../assets/page/virtualHuman/03.svg";
import icon4 from "../../assets/page/virtualHuman/04.svg";

interface IMakeSkillPicList {
  picUrl: string,
  numberUrl: string,
  title: string,
  iconPath?: string
}

interface IPicList {
  url: string,
  title?: string
}

// 制作能力图片与内容list
const makeSkillPicList: IMakeSkillPicList[] = [
  {
    picUrl: DEFAULT_URL,
    numberUrl: DEFAULT_URL,
    title: "原画设计",
    iconPath: icon1
  },
  {
    picUrl: DEFAULT_URL,
    numberUrl: DEFAULT_URL,
    title: "三维建模",
    iconPath: icon2
  },
  {
    picUrl: DEFAULT_URL,
    numberUrl: DEFAULT_URL,
    title: "智能绑骨",
    iconPath: icon3
  },
  {
    picUrl: DEFAULT_URL,
    numberUrl: DEFAULT_URL,
    title: "灯光渲染",
    iconPath: icon4
  }
];
// 制作能力虚拟人图片list
const makeSkillVPic: IPicList[] = [
  { url: DEFAULT_URL, title: "超写实" },
  { url: DEFAULT_URL, title: "3D美型" },
  { url: DEFAULT_URL, title: "漫画风格" },
  { url: DEFAULT_URL, title: "2.5D" },
  { url: DEFAULT_URL, title: "二次元" }
];
// 真人驱动图片list
const realPicList: IPicList[] = [
  { url: DEFAULT_URL, title: "影视级应用" },
  { url: DEFAULT_URL, title: "消费级应用" }
];
// AI 驱动图片list
const aiPicList: IPicList[] = [
  { url: DEFAULT_URL, title: "文本转动作、表情和情感语音" },
  { url: DEFAULT_URL, title: "AI对话系统+专业语料库定制" }
];
// 进化能力图片ist
const evolutionPicList: IPicList[] = [
  { url: "https://deepincite-test.oss-cn-shanghai.aliyuncs.com/incitemeta/static/virtualhuman/musicIcon.jpg", title: "音色模仿" },
  { url: "https://deepincite-test.oss-cn-shanghai.aliyuncs.com/incitemeta/static/virtualhuman/faceIcon.jpg", title: "表情学习和模仿" },
  { url: "https://deepincite-test.oss-cn-shanghai.aliyuncs.com/incitemeta/static/virtualhuman/actionIcon.jpg", title: "动作学习和模仿" },
  { url: "https://deepincite-test.oss-cn-shanghai.aliyuncs.com/incitemeta/static/virtualhuman/talkIcon.jpg", title: "对话能力进化" },
  { url: "https://deepincite-test.oss-cn-shanghai.aliyuncs.com/incitemeta/static/virtualhuman/learnIcon.jpg", title: "多模态学习" }
];
// 案列展示图片list
const casePicList: IPicList[] = [
  { url: DEFAULT_URL },
  { url: DEFAULT_URL },
  { url: DEFAULT_URL }
];
export default function Page() {
  return (
    <>
      <div className={cls(mainStyles.pageCon, styles.mainCon)}>
        {/* 大图 */}
        <div className={styles.bigPic} />
        <div className={mainStyles.mainTitle}>虚拟人是元宇宙中最核心的要素
          也是最具价值的数字资产
        </div>
        <div className={mainStyles.mainConSubtitle}>
          目前市场上对于虚拟人的需求非常巨大，尤其是优质的虚拟人更是稀缺资产。市场上已经出现了一批创造热点的虚拟人，虚拟偶像、虚拟代言人、虚拟主播、虚拟客服、真身复刻虚拟人等各类虚拟人已经开始进入数字世界，与真实人类共存。我们将人工智能与图形图像学技术完美融合，厚积而发，打造了制作、驱动和进化三大能力系统。
        </div>
        {/* 制作能力模块 */}
        <div className={styles.makeSkill}>
          <div className={styles.commonTitle}>制作能力</div>
          <div className={styles.commonSubTitle}>
            我们拥有全流程、全AI化的虚拟人制作系统，可高效、高质量的生成虚拟人。利用我们的AIGC技术，
            将超写实虚拟人的制作周期从2-4个月缩短到一周以内，其他类型虚拟人制作周期缩短到5分钟以内。
          </div>
          <div className={styles.makeSkillPicList}>
            {makeSkillPicList.map((item, index) => {
              return (
                <div key={index} className={styles.picListItem}>
                  <img src={item.picUrl} alt="" />
                  <div className={styles.text}>
                    {item.title}
                    <img src={item.iconPath} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.commonSubTitle}>
            通过我们专业的虚拟人制作流程和AIGC的能力，我们可轻松创建不同种类的虚拟人。
          </div>
          <div className={styles.makeSkillVPicList}>
            {makeSkillVPic.map((item, index) => {
              return (
                <div key={index} className={styles.vPicListItem}>
                  <img src={item.url} alt="" />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/*  驱动能力模块*/}
        <div className={styles.driveSkill}>
          <div className={styles.commonTitle}>驱动能力</div>
          <div className={styles.commonSubTitle}>借助我们全自研的动作表情捕捉以及多模态等AI算法，我们同时支持真人驱动和AI驱动两种方式。</div>
          <div className={styles.real}>
            <div className={styles.driveSkillCommonT}>真人驱动</div>
            <div className={styles.commonSubTitle}>根据不同的使用场景，我们提供影视级的专业捕捉驱动解决方案和消费级的低成本捕捉驱动方案。</div>
            <div className={styles.driveSkillFlexCon}>
              {realPicList.map((item, index) => {
                return (
                  <div key={index} className={styles.driveSkillFlexConItem}>
                    <img src={item.url} alt="" />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.ai}>
            <div className={styles.driveSkillCommonT}>AI驱动</div>
            <div className={styles.commonSubTitle}>我们自研的多模态算法，包括语音转情感表情、文本转情感语音等，可完美支持7x24小时的客服和播报任务。</div>
            <div className={styles.driveSkillFlexCon}>
              {aiPicList.map((item, index) => {
                return (
                  <div key={index} className={styles.driveSkillFlexConItem}>
                    <img src={item.url} alt="" />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/*  进化能力模块*/}
        <div className={styles.evolutionSkill}>
          <div className={styles.commonTitle}>进化能力</div>
          <div className={styles.commonSubTitle}>通过我们构建的进化引擎和算法，虚拟人可进化出多种场景下的AI能力，
            如音色的模仿和迁移、表情识别和学习、动作识别和学习、各落地场景下的对话学习、人物姿态动作特征学习等。
          </div>
          <div className={styles.evolutionSkillFlexCon}>
            {evolutionPicList.map((item, index) => {
              return (
                <div key={index} className={styles.evolutionSkillItem}>
                  <img src={item.url} alt="" />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/*  案例展示模块*/}
        <div className={styles.caseCon}>
          <div className={styles.commonTitle}>案例展示</div>
          <div className={styles.caseConFlexCon}>
            {casePicList.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.url} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.mobileCon}>
        {/* 大图 */}
        <div className={styles.bigPic} />
        <div className={styles.header}>
          <div className={styles.title}>虚拟人是元宇宙中最核心的要素 也是最具价值的数字资产</div>
          <div className={styles.subT}>目前市场上对于虚拟人的需求非常巨大，尤其是优质的虚拟人更是稀缺资产。市场上已经出现了一批创造热点的虚拟人，虚拟偶像、虚拟代言人、虚拟主播、虚拟客服、真身复刻虚拟人等各类虚拟人已经开始进入数字世界，与真实人类共存。我们将人工智能与图形图像学技术完美融合，厚积而发，打造了制作、驱动和进化三大能力系统。</div>
          <div className={styles.makeCon}>
            <div className={styles.comT}>制作能力</div>
            <div className={styles.comSubT}>我们拥有全流程、全AI化的虚拟人制作系统，可高效、高质量的生成虚拟人。利用我们的AIGC技术，将超写实虚拟人的制作周期从2-4个月缩短到一周以内，其他类型虚拟人制作周期缩短到5分钟以内。</div>
            <div className={styles.makeList}>
              {makeSkillPicList.map((item, index) => {
                return (
                  <div key={index} className={styles.item}>
                    <img src={item.picUrl} alt="" />
                    <div className={styles.makeTitle}>
                      {item.title}
                      <img src={item.iconPath} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.makeListPic}>
              <div className={styles.comSubT}>通过我们专业的虚拟人制作流程和AIGC的能力，我们可轻松创建不同种类的虚拟人。</div>
              <div className={styles.picList}>
                {makeSkillVPic.map((item, index) => {
                  return (
                    <div key={index} className={styles.item}>
                      <img src={item.url} alt="" />
                      <div className={styles.makeTitle}>
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.driveCon}>
            <div className={styles.comT}>驱动能力</div>
            <div className={styles.comSubT}>借助我们全自研的动作表情捕捉以及多模态等AI算法，我们同时支持真人驱动和AI驱动两种方式。</div>
            <div className={styles.realCon}>
              <div className={styles.title}>真人驱动</div>
              <div className={styles.subtitle}>根据不同的使用场景，我们提供影视级的专业捕捉驱动解决方案和消费级的低成本捕捉驱动方案。</div>
              <div className={styles.realList}>
                {realPicList.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item.url} alt="" />
                      <span>{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.realCon}>
              <div className={styles.title}>AI驱动</div>
              <div className={styles.subtitle}>我们自研的多模态算法，包括语音转情感表情、文本转情感语音等，可完美支持7x24小时的客服和播报任务。</div>
              <div className={styles.realList}>
                {aiPicList.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item.url} alt="" />
                      <span>{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.growCon}>
            <div className={styles.comT}>进化能力</div>
            <div className={styles.comSubT}>通过我们构建的进化引擎和算法，虚拟人可进化出多种场景下的AI能力，如音色的模仿和迁移、表情识别和学习、动作识别和学习、各落地场景下的对话学习、人物姿态动作特征学习等。</div>
            <div className={styles.growList}>
              {evolutionPicList.map((item, index) => {
                return (
                  <div key={index} className={styles.item}>
                    <img src={item.url} alt="" />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.caseCon}>
            <div className={styles.comT}>案例展示</div>
            <div className={styles.caseList}>
              {casePicList.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.url} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
