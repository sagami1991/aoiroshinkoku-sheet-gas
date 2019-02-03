export interface IShiwake {
    id: number;
    /** 日付 */
    date: Date;
    /** 借方科目 */
    kariKamoku: string;
    /** 借方金額 */
    kariPrice: number;
    /** 貸方科目 */
    kashiKamoku: string;
    /** 貸方金額 */
    kashiPrice: number;
    /** 摘要 */
    summary: string;
}

export interface ISoukanjo {
    shiwakeId: number;
    kamokuOrder: number;
    /** 日付 */
    date: Date;
    /** 勘定科目 */
    kamoku: string;
    /** 相手勘定科目 */
    aiteKamoku: string;
    /** 摘要 */
    summary: string;
    /** 借方金額 */
    kariPrice: number;
    /** 貸方金額 */
    kashiPrice: number;
    /** 残高 */
    zandaka: number;
}

export interface IShisan {
    /** 順番 */
    order: number;
    /** 勘定科目 */
    kamokuName: string;
    /** 借方合計 */
    totalKariPrice: number;
    /** 貸方合計 */
    totalKashiPrice: number;
    /** 借方残高 */
    kariZandaka: number;
    /** 貸方残高 */
    kashiZandaka: number;
}
