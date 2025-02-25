const Icon = (props) => {
  const { Svg, clickable, onCklick, className = "" } = props;

  const icon = <Svg className={`icon ${className}`} onCklick={undefined} />;

  if (clickable) {
    return (
      <button className={className} type="button" onClick={onCklick}>
        {icon}
      </button>
    );
  }
  return icon;
};

export { Icon };
