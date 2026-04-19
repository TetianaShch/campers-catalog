import { getCamperById } from '@/lib/campers';
import CamperGallery from '@/components/camper/CamperGallery/CamperGallery';
import CamperDetails from '@/components/camper/CamperDetails/CamperDetails';
import VehicleDetails from '@/components/camper/VehicleDetails/VehicleDetails';
import ReviewsList from '@/components/camper/ReviewsList/ReviewsList';
import BookingForm from '@/components/camper/BookingForm/BookingForm';
interface CamperDetailsPageProps {
  params: Promise<{ camperId: string }>;
}

export default async function CamperDetailsPage({
  params,
}: CamperDetailsPageProps) {
  const { camperId } = await params;
  const camper = await getCamperById(camperId);

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ flex: 1 }}>
        <CamperGallery gallery={camper.gallery} name={camper.name} />
      </div>
      <div style={{ flex: 1 }}>
        <h1>{camper.name}</h1>
        <p>
          ⭐ {camper.rating} ({camper.totalReviews})
        </p>
        <p>📍 {camper.location}</p>
        <p>€{camper.price}</p>
        <p>{camper.description}</p>
        <CamperDetails
          engine={camper.engine}
          transmission={camper.transmission}
          form={camper.form}
        />
        <VehicleDetails
          form={camper.form}
          length={camper.length}
          width={camper.width}
          height={camper.height}
          tank={camper.tank}
          consumption={camper.consumption}
        />
        <div style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
          <div style={{ flex: 1 }}>
            <ReviewsList reviews={camper.reviews || []} />
          </div>

          <div style={{ flex: 1 }}>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
