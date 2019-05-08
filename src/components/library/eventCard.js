import React from "react";

function EventCard (props) {

    return (
        <div className="md:w-1/3 p-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-grey-lightest">
            <img
              className="w-full"
              src={props.eventImage}
              alt={props.eventImageAlt}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">
                {props.eventDate}
              </div>
              <p className="text-grey-darker text-base">
               { props.eventTitle}
                <br />
                {props.eventLocation}
              </p>
            </div>
            <div className="px-6 py-3 pb-6">
              <a
                className="bg-transparent no-underline hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"
                href={props.eventCTALink}
              >
                {props.eventCTAText}
              </a>
            </div>
          </div>
        </div>
    );
}

export default EventCard;