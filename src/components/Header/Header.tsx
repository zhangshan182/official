import { setLocale, FormattedMessage, getLocale, history } from "@umijs/max";
import cls from "classnames";
import styles from "./styles.less";
import logoSrc from "../../assets/components/header/iconDown.svg";
import logo from "../../assets/components/header/logo.png";
import React, { useState, useEffect } from "react";

interface INavList {
  title: string,
  link: string,
}

const navList: INavList[] = [
  { title: "首页", link: "/home" },
  { title: "虚拟人", link: "/virtualHuman" },
  { title: "应用场景", link: "/applicationScenario" },
  { title: "产品中心", link: "/productCenter" },
  { title: "核心技术", link: "/coreTechnology" },
  { title: "关于我们", link: "/aboutUs" }
];
const MNavList: INavList[] = [
  { title: "首页", link: "/home" },
  { title: "虚拟人", link: "/virtualHuman" },
  { title: "应用场景", link: "/applicationScenario" },
  { title: "虚拟人定制", link: "/customized" },
  { title: "虚拟人直播解决方案", link: "/live" },
  { title: "虚拟人及内容生成SAAS平台", link: "/saas" },
  { title: "元宇宙基建UGC平台", link: "/metaverse" },
  { title: "核心技术", link: "/coreTechnology" },
  { title: "关于我们", link: "/aboutUs" }
];
const productRouteList: INavList[] = [
  { title: "虚拟人定制", link: "/customized" },
  { title: "虚拟人直播解决方案", link: "/live" },
  { title: "虚拟人及内容生成SAAS平台", link: "/saas" },
  { title: "元宇宙基建UGC平台", link: "/metaverse" }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHome, setIsHome] = useState<boolean>(true);
  const locale = getLocale();
  useEffect(() => {
    // console.log(history.location.pathname);
    if (history.location.pathname === "/home" || history.location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [history.location.pathname]);
  const [needBackBg, setNeedBackBg] = React.useState(false);
  // 处理滚动
  const handScroll = () => {
    // 基础宽度是1920px，这里获取当前屏幕下的头部的高度
    const currentHeaderH = (document.documentElement.clientWidth / 1920) * 64 - 20;
    const currentScrollH = document.documentElement.scrollTop;
    if (currentScrollH > currentHeaderH) {
      console.log("此处该转换了");
      setNeedBackBg(true)
    } else {
      console.log("该变回去了");
      setNeedBackBg(false)
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handScroll);
  }, []);
  return (
    <>
      <header className={cls(styles.pcContainer, isHome ? (needBackBg ? styles.commonBg : styles.homeBg) : styles.commonBg)}>
        <div className={styles.pcContainerLeft}>
          <div className={styles.logoCon}>
            <img src={logo} alt="" />
            <FormattedMessage id="welcome" />
          </div>
          <nav className={styles.navList}>
            {navList.map(item => {
              return (
                <div className={cls({
                  [styles.navItem]: true,
                  [styles.pcNavItemActive]: (item.link === history.location.pathname ||
                    (item.link === "/productCenter" && (["/customized", "/live", "/saas", "/metaverse"].some(value => {
                      return value === history.location.pathname;
                    })))
                  )
                })} key={item.link}
                     onClick={() => {
                       if (item.link !== "/productCenter") {
                         history.push(item.link);
                         window.location.reload();
                       }
                     }
                     }>
                  {item.title}
                  {item.link === "/productCenter" &&
                    <div className={styles.productCenterCon}>
                      <div className={styles.productCenterListCon}>
                        {productRouteList.map(item => {
                          return (
                            <div className={cls({
                              [styles.productCenterConItem]: true,
                              [styles.productCenterConItemAC]: item.link === history.location.pathname
                            })} key={item.title}
                                 onClick={() => {
                                   history.push(item.link);
                                   window.location.reload();
                                 }}>
                              <span>{item.title}</span>
                            </div>
                          );
                        })
                        }
                      </div>
                    </div>}
                  {item.link === "/productCenter" && <img src={logoSrc} alt={""} />}
                  <div className={styles.navItemBotLine} />
                </div>
              );
            })}
          </nav>
        </div>
        <div className={styles.pcContainerRight}>
          {locale === "zh-CN" ? "简" : "en"}
          {/*<img src={logoSrc} alt={""} />*/}
          {/*<div className={styles.botCon}>*/}
          {/*  <div onClick={() => setLocale(locale === "zh-CN" ? "en-US" : "zh-CN")} className={styles.itemCon}>{locale === "zh-CN" ? "en" : "简"}</div>*/}
          {/*</div>*/}
        </div>
      </header>
      <header className={cls({ [styles.mobileCon]: true, [styles.mobileConActive]: isOpen })}>
        <div className={styles.mobileConHeader}>
          <div className={styles.mobileConL}>
            <img src={logo} alt="" />
            映造
          </div>
          <div className={styles.mobileConR} onClick={() => setIsOpen((pre) => !pre)}>
            <div className={cls({ [styles.topLineActive]: isOpen })} />
            <div className={cls({ [styles.midLineActive]: isOpen })} />
            <div className={cls({ [styles.subLineActive]: isOpen })} />
          </div>
        </div>
        <div className={cls({ [styles.mobileNavCon]: true, [styles.mobileNavConActive]: isOpen })}>
          {MNavList.map(item => {
            return (<div className={cls({ [styles.mobileNavItem]: true, [styles.navItemActive]: window.location.pathname === item.link })} key={item.link} onClick={() => {
              history.push(item.link);
              setIsOpen(pre => !pre);
            }}>{item.title}</div>);
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
