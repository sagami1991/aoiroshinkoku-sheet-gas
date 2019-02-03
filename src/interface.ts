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
