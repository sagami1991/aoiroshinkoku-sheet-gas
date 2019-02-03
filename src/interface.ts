
/** 科目マスタ */
export interface IKamoku {
    /** 総勘定元帳の出力順 */
    outputOrder: number;
    /** 勘定科目名 */
    name: string;
    /**
     * - 借方: 借方科目にいるとき残高がプラスになり、貸方科目にいるとき残高がマイナスになる？
     * - 貸方: 借方科目にいるとき残高がマイナスになり、貸方科目にいるとき残高がプラスになる？
     */
    kashikariType: "借方" | "貸方";
    /**
     * - 貸借対照表: よくわからない
     * - 損益計算書: 会社の売上や経費にあてはまる科目？
     */
    seisanType: "貸借対照表" | "損益計算書";
}

/** 仕訳帳 */
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

/** 総勘定元帳 */
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

/** 試算表 */
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
