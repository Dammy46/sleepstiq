import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.footerBlock}>
      <div className="container" style={{ zIndex: 1, position: "relative" }}>
        <div className={classes.footerLogoBlockFlex}>
          <div className={classes.footerLogoBlock}>
            <Image
              src={"/assets/svgs/sleepstiq-footer.svg"}
              fill
              alt="footer logo"
            />
          </div>
        </div>
        <div className={classes.mainFooterBlock}>
          <div className={classes.sectionWrap}>
            <p className={classes.sectionTitle}>Company</p>
            <div className={classes.sectionFlex}>
              <p className={classes.sectionLabel}>About</p>
              <p className={classes.sectionLabel}>Blog</p>
              <p className={classes.sectionLabel}>Contact</p>
              <p className={classes.sectionLabel}>Jobs</p>
            </div>
          </div>
          <div className={classes.sectionWrap}>
            <p className={classes.sectionTitle}>Contact</p>
            <div className={classes.sectionFlex}>
              <div className={classes.sectionFlex}>
                <p className={classes.sectionLabel}>Phone</p>
                <p className={classes.sectionLabelInfo}>+234 708 507 3128</p>
              </div>
              <div className={classes.sectionFlex}>
                <p className={classes.sectionLabel}>Address</p>
                <p className={classes.sectionLabelInfo}>
                  16, Ogindipe Close, Upston Close
                </p>
              </div>
            </div>
          </div>
          <div className={classes.sectionWrap}>
            <p className={classes.sectionTitle}>CONSUMER ADVISORY</p>
            <div className={classes.sectionFlex}>
              <p
                className={classes.sectionLabelInfo}
                style={{ fontWeight: 400 }}
              >
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease. This product should be used only
                as directed on the label. All trademarks and copyrights are
                property of their respective owners and not affiliated with nor
                do they endorse this product. Results may vary.
              </p>
              <p
                className={classes.sectionLabelInfo}
                style={{ marginTop: "15px", fontWeight: 400 }}
              >
                By using our website or product, you agree to follow our{" "}
                <Link href={"#"} style={{ color: "#8FE2FF" }}>
                  terms of service.
                </Link>
              </p>
            </div>
          </div>
          <div className={classes.divider} />
          <div className={classes.sectionWrap}>
            <p className={classes.sectionTitle}>Get in Touch</p>
            <div className={classes.contactBlock}>
              <p className={classes.sectionLabel}>
                Feel free to get in touch with us vai email
              </p>
              <p className={classes.mailAddress}>hello@sleepstiq.com</p>
              <div className={classes.socialBlock}>
                <Link href={"#"}>
                  <div className={classes.socialWrap}>
                    <FaFacebookF style={{ color: "#12305B" }} />
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className={classes.socialWrap}>
                    <FaTwitter style={{ color: "#12305B" }} />
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className={classes.socialWrap}>
                    <GrGooglePlus style={{ color: "#12305B" }} />
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className={classes.socialWrap}>
                    <FaLinkedinIn style={{ color: "#12305B" }} />
                  </div>
                </Link>
              </div>
              <p
                className={classes.sectionLabel}
                style={{ marginTop: "40px", fontSize: "14px" }}
              >
                © 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
