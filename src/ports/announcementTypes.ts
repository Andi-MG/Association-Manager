export interface Announcement {
  id: string;
  title: string;
  content: string;
  imgUrl: string;
  internal: boolean;
}

export interface NewAnnouncement {
  title: string;
  content: string;
  imgUrl: string
  internal: boolean;
}