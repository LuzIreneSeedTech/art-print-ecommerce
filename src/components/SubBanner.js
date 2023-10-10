function SubBanner({ data }) {
  const renderedData = data.map((subject, index) => {
    return (
      <div className="sub-banner-content" key={index}>
        <div className="content-item">{"0" + (index + 1)}</div>
        <div className="content">{subject.content}</div>
      </div>
    );
  });

  return <div className="sub-banner">{renderedData}</div>;
}

export default SubBanner;
