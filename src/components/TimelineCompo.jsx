import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function TimelineCompo({ persons }) {
  console.log(persons);
  return (
    <div className="w-[32rem]">
      <Timeline>


        {persons.map((person, i) => {
          return <TimelineItem key={i}>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                {person.name}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                Age:{person.age}
                <br />
                {person.profession}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        })}








      </Timeline>
    </div>
  );
}