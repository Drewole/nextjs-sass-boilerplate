import React from 'react';
import styles from '@/styles/components/Button.module.scss';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  link?: { href: string; text: string };
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  target?: string;
  alt?: boolean;
};

export default function Button({
  children,
  className,
  onClick,
  link,
  type = 'button',
  tabIndex = 0,
  target = '_self',
  alt,
}: Props) {
  //TODO: This component overall needs some work
  const getDomain = (url: string) =>
    url.replace(/https?:\/\//, '').split('/')[0];

  const isEmail = (url: string) => url.search(/mailto:/) !== -1;

  const isFile = (url: string) => url.search(/\.pdf/) !== -1;

  const isPhone = (url: string) => url.search(/tel:/) !== -1;
  const isExternal = (path: string) => {
    if (!path || isEmail(path) || isFile(path) || isPhone(path)) {
      return true;
    }
    const { href } = window.location;
    const sameDomain = getDomain(href) === getDomain(path);
    return path.search(/https?:\/\//) !== -1 && !sameDomain;
  };
  // should we even return anything here?
  if (!link?.href || (!link?.text && !onClick)) {
    return (
      <div className={`${styles._} ${className} ${alt && styles.alt}`}>
        <button type={type} tabIndex={tabIndex}>
          {link?.text || children}
        </button>
      </div>
    );
  }
  return (
    <div className={`${styles._} ${className} ${alt && styles.alt}`}>
      <Link target={target} href={link?.href}>
        {link?.text || children}
      </Link>
    </div>
  );
}
