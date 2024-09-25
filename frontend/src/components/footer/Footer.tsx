import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.copyright}>
          © Created by Andrey Aleshkin, 2024
        </div>
        <div className={styles.links}>
          <a className={styles.item} href="https://github.com/risunya/">
            Github
          </a>
          <div className={styles.slash}>/</div>
          <a className={styles.item} href="https://t.me/risunya">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};
