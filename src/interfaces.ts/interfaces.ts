export interface Url{
    name: string;
    link: string;
    icon?: string;
}
export interface HeaderData{
    title: string;
    urls: Url[];
}