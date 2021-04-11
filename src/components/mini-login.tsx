import "./mini-login.scss";

type MiniLoginProps = {};

const MiniLogin = (props: MiniLoginProps) => {
  return (
    <nav className="mini-login">
      <div className="user-field-block">
        <p>Username</p>
        <input className="user-field" type="text" />
      </div>
      <div className="password-field-block">
        <p>Password</p>
        <input className="password-field" type="text" />
      </div>
      <button className="submit" children="submit" />
    </nav>
  );
};

export default MiniLogin;
