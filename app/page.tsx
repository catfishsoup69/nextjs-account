import Link from 'next/link';
import PostList from "@/app/ui/post-list";

export default function Page(): JSX.Element {
  return (
    <main className="container mx-auto mt-8 flex flex-col items-start justify-between">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-3xl font-bold mb-4">Добро пожаловать на главную страницу!</h1>
        <Link href="/login" className="mb-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
          Войти
        </Link>
      </div>
      <p className="mb-4">
        Это главная страница на SSR. Ниже представлены данные с <Link className="text-blue-500 hover:underline" href="https://jsonplaceholder.typicode.com/posts" target="_blank">jsonplaceholder.typicode.com/posts</Link>:
      </p>
      <div>
        <PostList />
      </div>
    </main>
  );
}
