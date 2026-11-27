const configuredTicketUrl = import.meta.env.VITE_FEETITICKET_URL?.trim();
const configuredPlayUrl = import.meta.env.VITE_FEETIPLAY_URL?.trim();

export const platformLinks = {
  ticket: configuredTicketUrl || "https://www.feetistore.com",
  play: configuredPlayUrl || "https://www.feetiplay.com",
};
