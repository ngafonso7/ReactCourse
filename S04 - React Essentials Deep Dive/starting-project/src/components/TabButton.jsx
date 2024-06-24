const TabButton = (props) => {
  const { children, onSelect, isSelected = false } = props;

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
