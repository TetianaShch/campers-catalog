interface CamperDetailsPageProps {
  params: Promise<{ camperId: string }>;
}

export default async function CamperDetailsPage({
  params,
}: CamperDetailsPageProps) {
  const { camperId } = await params;

  return (
    <div>
      <h1>Camper Details</h1>
      <p>Camper ID: {camperId}</p>
    </div>
  );
}
