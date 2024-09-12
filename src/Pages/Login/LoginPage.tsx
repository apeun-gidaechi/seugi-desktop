import Login from "@/Components/OnBording/SignIn/login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "@/constants/config/config.json";

// config에 타입 선언
const typedConfig = config as { "client-id": string };

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId={typedConfig["client-id"]}>
      <Login />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;