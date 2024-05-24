const Header = () => {
  return (
    <div>
      <style>
        {`
          .Header {
            font-size: 18px;
            width: 100%;
            height: 4%;
            padding:0 10px;
            box-sizing:border-box;
            border-bottom: 2px solid #ff0000;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            letter-spacing:2px;
          }
          .Header span{
            margin:0 5px;
            font-size:25px;
          }
        `}
      </style>
      <div className="Header">
        Players: <span>2</span>
      </div>
    </div>
  );
};

export default Header;
