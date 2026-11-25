const configuredTicketUrl = import.meta.env.VITE_FEETITICKET_URL?.trim();
const configuredPlayUrl = import.meta.env.VITE_FEETIPLAY_URL?.trim();

export const platformLinks = {
  ticket: configuredTicketUrl || "https://front-feeti.vercel.app",
  play: configuredPlayUrl || "https://feet-play-front.vercel.app",
};
