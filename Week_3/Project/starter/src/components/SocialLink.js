const SocialLink = ({ link, icon, itemClass }) => {
  return (
    <li>
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={itemClass}
      >
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
