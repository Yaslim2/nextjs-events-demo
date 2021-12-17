import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistic from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";

type QueryParam = {
  id?: string | string[];
};

const EventDetail: NextPage = () => {
  const router = useRouter();

  const query: QueryParam = router.query;
  const event = getEventById(query.id);

  if (!event) {
    <p>No event found</p>;
  }

  return (
    <>
      <EventSummary title={event!.title} />
      <EventLogistic
        date={event!.date}
        address={event!.location}
        image={event!.image}
        imageAlt={event!.title}
      />
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetail;
