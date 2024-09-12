import Login from "@/Components/Login/login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "@/constants/config/config.json";

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId={config["client-id"]}>
      <Login />
    </GoogleOAuthProvider>
  );
};
export default LoginPage;
