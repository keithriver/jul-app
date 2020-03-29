import React from "react";
import css from "./slack.module.css";

export const Slack = props => {
  console.log(css);
  return (
    <div className={css.page}>
      <div className={css.header}>
        <div className={css.inner}>
          <div className={css.left}>
            <div className={css.logo}>Slack</div>
            <div className={css.menu}>
              <div className={css.menuItem}>Why slack?</div>
              <div className={css.menuItem}>Solutions</div>
              <div className={css.menuItem}>Resources</div>
              <div className={css.menuItem}>Enterprise</div>
              <div className={css.menuItem}>Price</div>
            </div>
          </div>
          <div className={css.right}>
            <div className={css.signIn}>
              <a className={css.link} href="https://slack.com/intl/en-ru/">
                Sign in
              </a>
            </div>
            <div className={css.startButton}>
              <button className={css.button}> GET STARTED </button>
            </div>
          </div>
        </div>
      </div>
      <div className={css.billboard}>
        <div className={css.billInner}>
          <div className={css.billLeft}>
            <div className={css.billHeader}>WORK FROM HOME</div>
            <div className={css.billLargeText}>
              Slack brings the team together, wherever you are
            </div>
            <div className={css.billSmallText}>
              With all of your communication and tools in one place, remote
              teams will stay productive no matter where you’re working from.
            </div>
            <div className={css.billButtons}>
              <button className={css.buttonViolet} height="50px">
                LEARN MORE
              </button>
              <button className={css.buttonWhite}>CONTACT US</button>
            </div>
          </div>
          <div className={css.billRight}>
            <img src="https://a.slack-edge.com/22137/marketing/img/remote-work/img-hero-remote.jpg"></img>
          </div>
        </div>
      </div>
      <div className={css.videoSection}>
        <div className={css.vidHeader}>Break out of the inbox</div>
        <div className={css.vidSubheader}>
          Working in channels gives everyone on your team a shared view of
          progress and purpose.
        </div>
        <div className={css.video}>
          <video
            className={css.vid}
            autoplay
            loop
            muted
            playsinline
            poster="https://a.slack-edge.com/faab8/marketing/img/homepage/video/brand-campaign_inline-poster.jpg"
          >
            <source
              src="https://slack.com/marketing/img/homepage/video/brand-campaign_inline-video.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
};
