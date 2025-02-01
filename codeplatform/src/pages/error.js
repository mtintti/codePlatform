
import { useRouter } from "next/router";

export default function AuthErrorPage() {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Authentication Error</h1>
      {error && <p>Error: {error}</p>}
      <p>Please try again or contact support.</p>
    </div>
  );
}
