import type { NextPage } from "next";
import { EventList } from "../../components";
import { getAllEvents } from "../../dummy-data";

const Events: NextPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default Events;
