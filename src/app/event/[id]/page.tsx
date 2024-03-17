export default function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  if (!Number.isSafeInteger(id) || id < 0) {
    return <p>Invalid Event ID</p>;
  }
  return <p>Post: {id}</p>
}
