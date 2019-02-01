interface ISortOption<T> {
    keyName: keyof T;
    type: "ASC" | "DESC";
}

export class CommonUtils {
    public static getSimpleDate(date: Date): string {
        return Utilities.formatDate(date, "JST", "yyyy/MM/dd");
    }

    public static sortArray<T>(array: T[], sortOptions: Array<ISortOption<T>>): T[] {
        return array.sort((a, b) => {
            for (const sort of sortOptions) {
                if (a[sort.keyName] > b[sort.keyName]) {
                    return 1 * (sort.type === "ASC" ? 1 : -1);
                }
                if (a[sort.keyName] < b[sort.keyName]) {
                    return -1 * (sort.type === "ASC" ? 1 : -1);
                }
            }
            return 0;
        });
    }
}
