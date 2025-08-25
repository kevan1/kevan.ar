import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MyCalendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        // Add valid UiConfig properties here if needed
      });
    })();
  }, []);

  return (
    <Cal
      calLink="kevinanrique"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: 'month_view' }}
    />
  );
}