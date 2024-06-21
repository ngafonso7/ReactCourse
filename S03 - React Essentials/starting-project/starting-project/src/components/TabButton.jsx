
const TabButton = (props) => {

    const { children, onSelect } = props;

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
};

export default TabButton;