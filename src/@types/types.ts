export interface ClientOptions {
    base: string;
}

export interface UpBeatStats {
    song: Song;
    onair: OnAir;
    last_updated: string | null;
    listeners: string;
    listen_url: string;
}

export interface Song {
    title: string;
    artist: string;
    art: string;
    preview: string | number;
    spotify_id: string;
    likes: number;
    dislikes: number;
    favourites: number;
    played: number;
}

export interface OnAir {
    name: string;
    likes: number;
    profile_url: string;
    avatar: string;
    id: string | number;
    day: number;
    hour: number;
    socials?: Socials;
}

export interface Socials {
    snapchat?: string;
    spotify?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
}