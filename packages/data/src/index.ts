export type Event = "post" | "bulletin" | "dynamic";

const getTimeline = async (
  hostname: string,
  event: Event,
  page: number,
  numPerPage: number
) => [{}];

const getPost = async (hostname: string, slug: string) => ({});

const getBulletin = async (hostname: string, slug: string) => ({});

const getDynamic = async (hostname: string, hex: string) => ({});

export { getTimeline, getPost, getBulletin, getDynamic };
