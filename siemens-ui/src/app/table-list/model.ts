export interface iTableList{
    _id?: string;
    subdomain?: string;
    domain?: string;
    part_id?: string
    info_dependent?: string,
    isArray?: boolean,
    nested?: nested[];
}
export interface nested{
    _id: string;
    subdomain: string;
    domain: string;
    part_id: string;
}