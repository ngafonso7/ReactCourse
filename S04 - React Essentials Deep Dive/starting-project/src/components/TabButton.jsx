const TabButton = (props) => {
  const { children, isSelected = false, ...propss } = props;

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...propss}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
