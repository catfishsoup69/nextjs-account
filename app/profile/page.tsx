import {Metadata} from "next";
import ProfileDesk from "@/app/ui/profile/profile-desk";
import {Button} from "@/app/ui/button";
import Link from "next/link";
import {unAuthenticate} from "@/app/lib/actions";

export const metadata: Metadata = {
  title: 'Profile',
};

export default async function Page() {
  return (
    <main className="container mx-auto mt-8">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-3xl font-bold mb-4">Профиль пользователя</h1>
        <form action={async () => {'use server'; await unAuthenticate()}}>
          <Button
            className="mb-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
            Выйти
          </Button>
        </form>
      </div>
      <p className="mb-4">
        Использую данные первого пользователя с <Link className="text-blue-500 hover:underline" href="https://jsonplaceholder.typicode.com/users" target="_blank">jsonplaceholder.typicode.com/users</Link>
      </p>
      <ProfileDesk/>
    </main>
  );
}
