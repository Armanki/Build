import styles from "./Footer.module.scss";
import FbIcon from "../../../../preloader/images/_logos/fbIcon.svg";
import InstIcon from "../../../../preloader/images/_logos/inst.svg";
import LnIcon from "../../../../preloader/images/_logos/ln.svg";
import TwIcon from "../../../../preloader/images/_logos/twIcon.svg";
import Build from "../../../../preloader/images/_primitives/buildOptima.svg";

import { footerLinks } from "../../../../data/footerLink";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div>
          <img className={styles.image} src={Build} alt="BuildOptima" />
        </div>
        <div className={styles.linksContainer}>
          {footerLinks[0].map((item) => (
            <div key={item.id} className={styles.link}>
              <a href={item.href}>{item.defaultMessage}</a>
            </div>
          ))}
        </div>
        <div className={styles.icons}>
          <img src={FbIcon} alt="Facebook" />
          <img src={TwIcon} alt="Twitter" />
          <img src={InstIcon} alt="Instagram" />
          <img src={LnIcon} alt="LinkedIn" />
        </div>
      </div>
      <div className={styles.info}>
        {footerLinks[1].map((el) => (
          <div key={el.id} className={styles.infoLink}>
            <a href={el.href}>{el.defaultMessage}</a>
          </div>
        ))}
      </div>
      <p className={styles.p}>Copyright 2022 Buildoptima Inc.</p>
    </div>
  );
};
export default Footer;
