import { DUMMY_EVENTS_TYPE } from "../../dummy-data";
import EventItem from "../EventItem";
import classes from "./styles.module.css";
interface EventListProps {
  items: DUMMY_EVENTS_TYPE[];
}

const EventList: React.FC<EventListProps> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return <EventItem item={item} />;
      })}
    </ul>
  );
};

export default EventList;
