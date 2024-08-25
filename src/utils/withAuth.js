import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace("auth/login");
        } else {
          setLoading(false); // User is authenticated, stop loading
        }
      });

      return () => unsubscribe(); // Cleanup subscription on unmount
    }, [router]);

    if (loading) {
      // Optionally, render a loading spinner or message
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
