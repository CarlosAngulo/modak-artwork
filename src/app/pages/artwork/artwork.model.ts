import { IArtworkDataDTO } from "@app/api/arwork.model";

export interface IArtWork {
  date: string;
  artist: string;
  id: number;
  image: string;
  title: string;
  description?: string;
}

export class ArtWork {
  date: string;
  artist: string;
  id: number;
  image: string;
  title: string;
  description?: string;

  constructor(data: IArtworkDataDTO, iiifUrl: string, placeholderImage: string) {
    this.date = data.date_display;
    this.artist = data.artist_display;
    this.id = data.id;
    this.image = data.image_id
      ? `${iiifUrl}/${data.image_id}/full/843,/0/default.jpg`
      : placeholderImage;
    this.title = data.title;
    this.description = data.description;
  }
}