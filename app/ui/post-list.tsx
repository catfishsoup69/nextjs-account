import {Post} from "@/app/types/posts";

async function getPosts(): Promise<Post[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: 'no-store' })
  return res.json();
}

export default async function PostList() {
  const posts: Post[] = await getPosts()
  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id} className="mb-2 p-2 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-600">{item.body}</p>
        </li>
      ))}
    </ul>
  );
};
