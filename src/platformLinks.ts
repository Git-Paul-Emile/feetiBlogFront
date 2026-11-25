const configuredTicketUrl = import.meta.env.VITE_FEETITICKET_URL?.trim();

export const platformLinks = {
  ticket: configuredTicketUrl || "https://tickets.feeti.co",
};
