function PrototypeElements(props) {
  // const showPrototype = props.display ? "display true"
  return (
    <div className={props.isHidden(props.className, props.hide)}>Elements</div>
  );
}

export default PrototypeElements;
