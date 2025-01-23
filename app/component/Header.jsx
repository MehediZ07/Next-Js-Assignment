import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <nav className="flex space-x-6 justify-between w-full">
          <Link href="/">
            <span className="text-lg font-semibold hover:text-teal-400 transition-colors">
              Home
            </span>
          </Link>
          <div className="flex space-x-6">
            {!user ? (
              <>
                <LoginLink className="text-lg font-semibold hover:text-teal-400 transition-colors">
                  Profile
                </LoginLink>
                <LoginLink className="text-lg font-semibold hover:text-teal-400 transition-colors">
                  Sign in
                </LoginLink>
                <RegisterLink className="text-lg font-semibold hover:text-teal-400 transition-colors">
                  Sign up
                </RegisterLink>
              </>
            ) : (
              <>
                <Link href="/profile">
                  <span className="text-lg font-semibold hover:text-teal-400 transition-colors">
                    Profile
                  </span>
                </Link>
                <LogoutLink className="text-lg font-semibold hover:text-teal-400 transition-colors">
                  Logout
                </LogoutLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
