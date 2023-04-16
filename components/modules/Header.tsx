import styles from '@styles/components/Header.module.scss';

export default function Header() {
  return (
    <header className={styles._}>
      <span>LOGO</span> <nav>Navigation</nav>
    </header>
  );
}
