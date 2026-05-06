export default async function ListingPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return <div>ListingPage {id}</div>;
}
