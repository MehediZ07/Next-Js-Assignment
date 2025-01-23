import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  // Get the user data from the session
  const { getUser } = getKindeServerSession();
  const user = await getUser();
console.log(user)
  // If no user is found, redirect to the login page
  if (!user) {
    redirect(process.env.NEXT_PUBLIC_LOGIN_REDIRECT);
  }

  // Render the profile page if user is authenticated
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to your profile!</h1>
      <p className="text-lg mt-4">Name: {user.given_name } {user.family_name}</p>
      <p className="text-lg">Email: {user.email}</p>
    </main>
  );
}
