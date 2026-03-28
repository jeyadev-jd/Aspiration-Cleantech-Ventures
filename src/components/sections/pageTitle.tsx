const PageTitle = ({ title, bgImage = "/img/breadcrumb.jpg" }: { title: string; currentPage?: string; bgImage?: string }) => {
  const isCustomBg = bgImage !== "/img/breadcrumb.jpg";
  
  return (
    <div className={`breadcrumb-wrapper bg-cover ${isCustomBg ? 'custom-header-bg' : ''}`} style={{ backgroundImage: `url("${bgImage}")` }}>
      {isCustomBg && (
        <style>
          {`
            .custom-header-bg::before {
              opacity: 0.6 !important;
            }
          `}
        </style>
      )}
      
      {!isCustomBg && (
        <>
          <div className="border-shape">
            <img src="/img/element.png" alt="shape-img" />
          </div>
          <div className="line-shape">
            <img src="/img/line-element.png" alt="shape-img" />
          </div>
        </>
      )}
      <div className="container">
        <div className="page-heading">
          <h1 className="wow slideUp" data-delay=".3">{title}</h1>
        </div>
      </div>
    </div>

  )
}

export default PageTitle