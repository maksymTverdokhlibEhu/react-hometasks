import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../lib/hooks/useLocalStorage";
import { userService } from "../../lib/services/userService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedAuthRouteProps {
  children: React.ReactNode;
}

export const ProtectedAuthRoute = ({ children }: ProtectedAuthRouteProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { value: authId } = useLocalStorage("authId");

  useEffect(() => {
    const fn = async () => {
      const isAuth = await userService.getUserbyId(authId?.toString() || "");
      if (!isAuth) {
        return navigate("/login", { replace: true });
      }
      setLoading(false);
    };
    fn();
  }, []);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return children;
};
