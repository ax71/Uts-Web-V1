import AuthButton from "../atoms/AuthButton";

const AuthActions = () => (
  <div className="flex items-center gap-3">
    <AuthButton label="Sign up" />
    <AuthButton label="Login" variant="outline" />
  </div>
);

export default AuthActions;
