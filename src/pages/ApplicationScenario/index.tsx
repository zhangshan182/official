import React from 'react';
import mainStyles from '../../global.less'
import styles from './index.less'
import cls from "classnames";
import RightPic from "@/pages/ApplicationScenario/components/RightPic";
import { DEFAULT_URL } from "@/constants";
import LeftPic from "@/pages/ApplicationScenario/components/LeftPic";
import MobileIndex from "@/pages/ApplicationScenario/components/MobileItem";
import MobileItem from "@/pages/ApplicationScenario/components/MobileItem";

export default function Page() {
  return (
    <>
      <div className={styles.pcCon}>
        <div className={cls(mainStyles.pageCon)}>
          <div className={styles.bigPic}/>
          <div className={mainStyles.mainTitle}>
            通过我们全链路的虚拟人和虚拟内容的生成与制作能力，可覆盖多个场景的全流程落地和应用。
          </div>
          <div className={mainStyles.mainConSubtitle}>
            借助我们多维度的不同产品，可高效提供高质量的虚拟人和虚拟内容，服务各类应用场景。如虚拟偶像、企业代言、直播带货、主播主持、解说客服、影视制作等。
          </div>
          <RightPic url={DEFAULT_URL} title={'虚拟偶像'} subtitle={'我们拥有高质量的虚拟人和虚拟内容的生产制作能力，可为客户打造虚拟偶像和内容IP，赋能内容生态和流量经济。我们不仅能在短短一周内为客户提供高质量的虚拟人，更具备持续生产优质内容的能力，可为客户提供全流程的内容支持。'}
                    showMore={true} morePath={'morePath'}/>
          <LeftPic url={DEFAULT_URL} title={'企业代言'} subtitle={'根据客户的定制化需求，我们可为企业客户制作符合企业形象、有助企业宣传的高质量虚拟人，助力企业营销、品牌宣传，提升企业形象，为企业数字化赋能。'}
                   showMore={true} morePath={'morePath'}/>
          <RightPic url={DEFAULT_URL} title={'直播带货'} subtitle={'我们专为直播场景研发了全流程解决方案，客户通过一个普通RGB摄像头，即可实现高质量、低延迟的虚拟人直播。同时我们的虚拟直播软件可支持抖音、视频号、淘宝、京东、斗鱼、虎牙、OBS等各类平台推流，为用户提供高质量、可靠的直播效果。'}
                    showMore={true} morePath={'morePath'}/>
          <LeftPic url={DEFAULT_URL} title={'主播主持'} subtitle={'我们可根据客户不同需求，提供真人驱动或者AI驱动的虚拟主播主持。对于真人驱动方案，我们提供低延迟、高质量的实时动作表情捕捉；对于AI驱动方案，我们仅需预设文本就可实现表情丰富、富有情感的语音播报。'}
                   showMore={false} />
          <RightPic url={DEFAULT_URL} title={'解说客服'} subtitle={'在企业培训、政策介绍、景区导览、比赛解说和电商客服等场景下，我们通过自研的AI驱动虚拟人，可为上述场景提供有声有色、如同真人般的播报解说和问题解答等服务，为客户降本增效。'}
                    showMore={false} />
          <LeftPic url={DEFAULT_URL} title={'影视制作'} subtitle={'基于我们高质量的虚拟人和高精度的动作捕捉，我们可提供影视级的中之人拍摄制作方案。通过中之人的表演，可完全如同拍摄影视作品一样，实现高精度的面部表情和身体动作的实时跟踪，完成虚拟人的影视大作。'}
                   showMore={false} />
        </div>
      </div>
      <div className={styles.mobileCon}>
        <div className={styles.bigPic}/>
        <div className={styles.headerTitle}>通过我们全链路的虚拟人和虚拟内容的生成与制作能力，可覆盖多个场景的全流程落地和应用。</div>
        <div className={styles.subTitle}>借助我们多维度的不同产品，可高效提供高质量的虚拟人和虚拟内容，服务各类应用场景。如虚拟偶像、企业代言、直播带货、主播主持、解说客服、影视制作等。</div>
        <MobileItem url={DEFAULT_URL} title={'虚拟偶像'} subtitle={'我们拥有高质量的虚拟人和虚拟内容的生产制作能力，可为客户打造虚拟偶像和内容IP，赋能内容生态和流量经济。我们不仅能在短短一周内为客户提供高质量的虚拟人，更具备持续生产优质内容的能力，可为客户提供全流程的内容支持。'}
          showMore={true} morePath={'morePath'}/>
        <MobileItem url={DEFAULT_URL} title={'企业代言'} subtitle={'根据客户的定制化需求，我们可为企业客户制作符合企业形象、有助企业宣传的高质量虚拟人，助力企业营销、品牌宣传，提升企业形象，为企业数字化赋能。'}
                 showMore={true} morePath={'morePath'}/>
        <MobileItem url={DEFAULT_URL} title={'直播带货'} subtitle={'我们专为直播场景研发了全流程解决方案，客户通过一个普通RGB摄像头，即可实现高质量、低延迟的虚拟人直播。同时我们的虚拟直播软件可支持抖音、视频号、淘宝、京东、斗鱼、虎牙、OBS等各类平台推流，为用户提供高质量、可靠的直播效果。'}
                  showMore={true} morePath={'morePath'}/>
        <MobileItem url={DEFAULT_URL} title={'主播主持'} subtitle={'我们可根据客户不同需求，提供真人驱动或者AI驱动的虚拟主播主持。对于真人驱动方案，我们提供低延迟、高质量的实时动作表情捕捉；对于AI驱动方案，我们仅需预设文本就可实现表情丰富、富有情感的语音播报。'}
                 showMore={false} />
        <MobileItem url={DEFAULT_URL} title={'解说客服'} subtitle={'在企业培训、政策介绍、景区导览、比赛解说和电商客服等场景下，我们通过自研的AI驱动虚拟人，可为上述场景提供有声有色、如同真人般的播报解说和问题解答等服务，为客户降本增效。'}
                  showMore={false} />
        <MobileItem url={DEFAULT_URL} title={'影视制作'} subtitle={'基于我们高质量的虚拟人和高精度的动作捕捉，我们可提供影视级的中之人拍摄制作方案。通过中之人的表演，可完全如同拍摄影视作品一样，实现高精度的面部表情和身体动作的实时跟踪，完成虚拟人的影视大作。'}
                 showMore={false} />
      </div>
    </>
  );
}
