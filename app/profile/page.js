import { getKindeServerSession, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  // Get the user data from the session
  const { getUser } = getKindeServerSession();
  const user = await getUser();
console.log(user)
  // If no user is found, redirect to the login page
  if (!user) {
    return (
     <div className="flex flex-col gap-4 min-h-screen items-center justify-center">
      <h1 className="text-2xl text-teal-400  font-bold text-center" >You want to log first</h1>
      <LoginLink  className="text-lg font-semibold hover:text-teal-400 transition-colors p-2 w-fit border-2 solid border-teal-400 rounded-md">
     Login Now
   </LoginLink></div>)
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
