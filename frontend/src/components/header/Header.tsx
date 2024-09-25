import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.icon}>icon</div>
        <div className={styles.themeButton}>theme button</div>
      </div>
    </header>
  );
};
