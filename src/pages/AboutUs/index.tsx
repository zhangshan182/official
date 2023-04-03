import React from 'react';
import styles from './index.less';
import aboutPageIcon from '../../assets/page/about/aboutPageIcon.png'
export default function Page() {
  return (
    <>
      <div className={styles.aboutCon}>
        <div className={styles.aboutConTitle}>关于我们</div>
        <div className={styles.aboutConDetail}>
          映造虚拟人是深励科技旗下虚拟人产品，深励科技成立于2021年，公司位于上海，是一家专注于研发AIGC技术并构建虚拟世界的人工智能元宇宙公司。我们将人工智能与图形图像学完美融合，以全自研的核心算法和技术栈，为元宇宙生产人、物和场景。目前我们的虚拟人产品包括虚拟人定制、虚拟人及内容SAAS平台、虚拟人直播解决方案和云宇宙基建UGC平台，通过我们高质量，多场景的虚拟人产品，可满足客户高质量、高频率的虚拟人和虚拟内容的需求，赋能文娱、电商、影视、教育、金融、医疗、直播等多个行业和场景，为企业创造多维价值，提升品牌形象，降本增效。我们的愿景是通过打造一个分润模式的AIGC（人工智能生成内容）+PGC（专家生成内容）+UGC（用户生成内容）的元宇宙基建平台，以迅速帮助企业搭建元宇宙应用；同时借助元宇宙全真场景和结构化数据，为客户创建“数据-学习-推理”的闭环人工智能引擎，实现强人工智能。
        </div>
        <img src={aboutPageIcon} alt="" />
      </div>
      <div className={styles.aboutConM}>
        <div className={styles.title}>关于我们</div>
        <div className={styles.subT}>
          映造虚拟人是深励科技旗下虚拟人产品，深励科技成立于2021年，公司位于上海，是一家专注于研发AIGC技术并构建虚拟世界的人工智能元宇宙公司。我们将人工智能与图形图像学完美融合，以全自研的核心算法和技术栈，为元宇宙生产人、物和场景。目前我们的虚拟人产品包括虚拟人定制、虚拟人及内容SAAS平台、虚拟人直播解决方案和云宇宙基建UGC平台，通过我们高质量，多场景的虚拟人产品，可满足客户高质量、高频率的虚拟人和虚拟内容的需求，赋能文娱、电商、影视、教育、金融、医疗、直播等多个行业和场景，为企业创造多维价值，提升品牌形象，降本增效。我们的愿景是通过打造一个分润模式的AIGC（人工智能生成内容）+PGC（专家生成内容）+UGC（用户生成内容）的元宇宙基建平台，以迅速帮助企业搭建元宇宙应用；同时借助元宇宙全真场景和结构化数据，为客户创建“数据-学习-推理”的闭环人工智能引擎，实现强人工智能。
        </div>
        <img src={aboutPageIcon} alt="" />
      </div>
    </>

  );
}
