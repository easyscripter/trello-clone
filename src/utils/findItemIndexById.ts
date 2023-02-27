export type Item = {
    id: string;
}

export const findItemIndexById = <T extends Item>(items: Array<T>, id: string) => {
    return items.findIndex((item) => item.id === id);
}
