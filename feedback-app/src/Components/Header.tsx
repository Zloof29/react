export const Header = (
  bgColor: { bgColor: string },
  textColor: { textColor: string }
) => {
  const headerStyles = {
    backgroundColor: bgColor.bgColor,
    color: textColor.textColor,
  };

  return (
    <header className="containerHeader" style={headerStyles}>
      <div>
        <h1>Feedback UI</h1>
      </div>
    </header>
  );
};
