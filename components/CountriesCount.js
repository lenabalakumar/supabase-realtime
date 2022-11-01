import React from "react";
import { supabaseClient } from "../config/supabaseClient";

const CountriesCount = () => {
  const [deletedCountryID, setDeletedCountryID] = React.useState();
  React.useEffect(() => {
    const countriesChannel = supabaseClient
      .channel("countries-changes")
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "countries" },
        (payload) => {
          console.log("Receiving payload");
          console.log(payload.old.id);
          setDeletedCountryID(payload.old.id);
        }
      )
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          console.log("Ready to receive db changes");
        }
      });

    return () => {
      console.log(supabaseClient.getChannels());
      supabaseClient.removeChannel(countriesChannel);
    };
  });
  return <div>Recently deleted country: {deletedCountryID}</div>;
};

export default CountriesCount;
