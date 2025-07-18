// server components
// agola naki client ar kase jabei na

import Counter from "./components/Counter";
// import Counter from "@/app/components/Counter"


export default async function Home() {

  console.log("i am rendered");

  const res = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=5");

  const posts = await res.json();

  return (
   <div>
    <h2>This is main page</h2>

    <ul>
      {posts.map((c) => (
        <li key={c.id}>{c.title}</li>
      ))}
    </ul>

    <hr />

    <Counter />
   </div>
  );
}
