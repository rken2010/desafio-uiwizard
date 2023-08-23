import { api } from "../api";

export default async function IdPage ( {params:{id}}: {params:{id:number}}) {
  const postLink = await api.getPost(id)
  return (
    <iframe className="w-full h-full" src={postLink.url} title={postLink.title}/>
  );
}
